// api/apply.js  – Vercel Serverless Function
// Receives a job application form submission and forwards it via Resend.
//
// Required environment variables (set in Vercel dashboard):
//   RESEND_API_KEY  – your Resend API key (re_xxxxxxxxxxxx)
//   OWNER_EMAIL     – email address to receive applications (e.g. info@kimasumelbourne.com.au)

export default async function handler(req, res) {
    // Only accept POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, phone, about, position, resumeLink } = req.body;

    // Basic validation
    if (!name || !email || !position) {
        return res.status(400).json({ error: 'Name, email and position are required.' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const ownerEmail = process.env.OWNER_EMAIL || 'info@kimasumelbourne.com.au';

    if (!apiKey) {
        console.error('RESEND_API_KEY not set');
        return res.status(500).json({ error: 'Server configuration error.' });
    }

    const html = `
    <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f8f7fc;border-radius:12px;">
      <div style="text-align:center;margin-bottom:24px;">
        <img src="https://kimasumelbourne.com.au/logo.png" alt="Kimasu" style="height:52px;" />
      </div>
      <h2 style="font-family:sans-serif;color:#1a1a2e;margin-bottom:4px;">New Job Application 🥢</h2>
      <p style="color:#777;font-size:14px;margin-bottom:24px;">Someone just applied to join the Kimasu team.</p>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;color:#1a1a2e;width:40%;">Name</td><td style="padding:10px 0;border-bottom:1px solid #eee;color:#555;">${name}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;color:#1a1a2e;">Email</td><td style="padding:10px 0;border-bottom:1px solid #eee;color:#555;"><a href="mailto:${email}" style="color:#e91e8c;">${email}</a></td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;color:#1a1a2e;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #eee;color:#555;">${phone || '—'}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;color:#1a1a2e;">Position</td><td style="padding:10px 0;border-bottom:1px solid #eee;color:#555;">${position}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;color:#1a1a2e;">Resume&nbsp;Link</td><td style="padding:10px 0;border-bottom:1px solid #eee;color:#555;">${resumeLink ? `<a href="${resumeLink}" style="color:#e91e8c;">${resumeLink}</a>` : '—'}</td></tr>
        <tr><td style="padding:10px 0;font-weight:600;color:#1a1a2e;vertical-align:top;">About</td><td style="padding:10px 0;color:#555;white-space:pre-wrap;">${about || '—'}</td></tr>
      </table>
      <div style="margin-top:32px;padding:16px;background:#fff0f8;border-left:4px solid #e91e8c;border-radius:4px;font-size:13px;color:#555;">
        Received on ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' })} AEST
      </div>
    </div>`;

    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'Kimasu Careers <onboarding@resend.dev>',
                to: [ownerEmail],
                reply_to: email,
                subject: `New Application: ${position} — ${name}`,
                html,
            }),
        });

        if (!response.ok) {
            const err = await response.text();
            console.error('Resend error:', err);
            return res.status(500).json({ error: 'Failed to send email. Please try again.' });
        }

        return res.status(200).json({ success: true });
    } catch (err) {
        console.error('Unexpected error:', err);
        return res.status(500).json({ error: 'Unexpected server error.' });
    }
}
