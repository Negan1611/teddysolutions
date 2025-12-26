// Cloudflare Pages Function - Contact Form API
// File: functions/api/contact.ts

/// <reference types="@cloudflare/workers-types" />

interface Env {
    DB: D1Database;
}

interface ContactData {
    name: string;
    phone: string;
    email?: string;
    service: string;
    message: string;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
    const { request, env } = context;

    // CORS headers
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
    };

    // Handle preflight
    if (request.method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders });
    }

    try {
        // Parse request body
        const data: ContactData = await request.json();

        // Validate required fields
        if (!data.name || !data.phone || !data.service) {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: 'Vui lòng điền đầy đủ thông tin bắt buộc'
                }),
                { status: 400, headers: corsHeaders }
            );
        }

        // Validate phone number (basic)
        const phoneRegex = /^[0-9]{10,11}$/;
        if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: 'Số điện thoại không hợp lệ'
                }),
                { status: 400, headers: corsHeaders }
            );
        }

        // Insert into database
        const result = await env.DB.prepare(
            'INSERT INTO contacts (name, phone, email, service, message) VALUES (?, ?, ?, ?, ?)'
        )
            .bind(
                data.name,
                data.phone,
                data.email || null,
                data.service,
                data.message || null
            )
            .run();

        // Optional: Send notification email via Cloudflare Email Workers
        // await sendNotificationEmail(data);

        return new Response(
            JSON.stringify({
                success: true,
                message: 'Cảm ơn bạn! Chúng tôi sẽ liên hệ lại trong 24h.',
                id: result.meta.last_row_id
            }),
            { status: 200, headers: corsHeaders }
        );

    } catch (error) {
        console.error('Contact form error:', error);

        return new Response(
            JSON.stringify({
                success: false,
                error: 'Có lỗi xảy ra. Vui lòng thử lại sau.'
            }),
            { status: 500, headers: corsHeaders }
        );
    }
}

// GET endpoint to retrieve contacts (admin only - add authentication)
export async function onRequestGet(context: { request: Request; env: Env }) {
    const { request, env } = context;

    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    };

    try {
        // TODO: Add authentication check here
        // const authHeader = request.headers.get('Authorization');
        // if (!isValidAuth(authHeader)) {
        //   return new Response('Unauthorized', { status: 401 });
        // }

        const { results } = await env.DB.prepare(
            'SELECT * FROM contacts ORDER BY created_at DESC LIMIT 100'
        ).all();

        return new Response(
            JSON.stringify({ success: true, contacts: results }),
            { status: 200, headers: corsHeaders }
        );

    } catch (error) {
        console.error('Get contacts error:', error);

        return new Response(
            JSON.stringify({ success: false, error: 'Server error' }),
            { status: 500, headers: corsHeaders }
        );
    }
}
