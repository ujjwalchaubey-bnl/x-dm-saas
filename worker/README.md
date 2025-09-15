# DM Worker Setup

This worker automatically sends DMs from pending jobs in the Supabase logs table.

## Setup

1. **Create a `.env` file** in the project root with the following variables:

```env
# Supabase Configuration
SUPABASE_URL=your_supabase_url_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# X.com Login Credentials
X_USERNAME=your_x_username_or_email
X_PASSWORD=your_x_password
```

2. **Install dependencies** (if not already done):
```bash
npm install
```

3. **Run the worker**:
```bash
node worker/sendDMWorker.js
```

## Features

- ✅ **Robust Login**: Multiple selector fallbacks for X.com login
- ✅ **Smart DM Sending**: Handles various DM interface layouts
- ✅ **Error Handling**: Comprehensive error logging and retry logic
- ✅ **Rate Limiting**: Random delays between messages to avoid detection
- ✅ **Status Updates**: Updates Supabase logs with success/failure status

## Troubleshooting

### Login Issues
- Ensure your X.com credentials are correct
- Check if 2FA is enabled (may need to disable temporarily)
- Verify the account isn't locked or restricted

### DM Sending Issues
- Some users may have DMs disabled
- The worker will log these as "failed" with appropriate error messages
- Check the logs table in Supabase for detailed error information

### Selector Issues
- X.com frequently updates their interface
- The worker includes multiple fallback selectors
- If selectors fail, check the console output for which ones are working

## Production Deployment

For production, change `headless: false` to `headless: true` in the worker file to run without a visible browser window.
