# Contact Form Serverless Function

This is a simple serveless function (API) written in Node.js to implement a custom contact form for your website.

I use it on [my website](https://giuseppegurgone/contact) to receive enquiries from potential new customers (you? :).

<img height=400 src=https://user-images.githubusercontent.com/711311/103940415-93347980-512d-11eb-9194-0a35d1536512.png alt="screenshot of the contact form on my website">

It uses the SendGrid Node.js client (free) and must be hosted on [Vercel](https://vercel.com) because it uses a couple of Vercel-specific helpers. However those can easily be replaced with Node.js equivalents if needed.

## Requirements

- SendGrid account (free and very easy to set up) - https://sendgrid.com
- Verified email account on SendGrid - this is the one you use to forward enquires (send emails) to yourself.

  Verify it here https://sendgrid.com/docs/for-developers/sending-email/sender-identity/

- Vercel account - https://vercel.com
- Node.js

## Usage

### Configuration

The function requires the following ENV variables:

```shell
# Your email address
CONTACT_EMAIL

# SendGrid API Key
# https://sendgrid.com/docs/ui/account-and-settings/api-keys/#creating-an-api-key
SENDGRID_KEY

# Which origins are allowed to make requests to this API.
# This is a string of comma separated origins eg.
# "giuseppegurgone.com,ggurgone.com"
CORS_ORIGINS
```

On Vercel you might want to store these as Secrets. See [https://vercel.com/docs/environment-variables#secret-environment-variables](https://vercel.com/docs/environment-variables#secret-environment-variables).

### Customization

You can customize the email Subject and Message by tweaking the templates returned by the `composeSubject` and `composeMessage` functions which are defined at the bottom of the `api/index.js` file.

#### Required Fields

Required fields are defined in a map of `{ fieldName: "error message }"` pairs, called `requiredFieldsErrorMessages`.

You can find and customize this in `api/index.js`.

## User Interface (HTML)

You can find an example UI in [./example-form.html](./example-form.html).

## Deployment

Once the environment variables (secrets) are configured, you can deploy the function to Vercel via commandline with `vercel --prod`. If you are not familiar with Vercel please take a look at [their docs](https://vercel.com/docs/platform/deployments).

## License

MIT - (c) 2021-present Giuseppe Gurgone
