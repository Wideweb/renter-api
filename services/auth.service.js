const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '605053064888-2fr6mn6qovnn0nn3ilhtdju3m9h0bavv.apps.googleusercontent.com';

class AuthService {
    constructor() {
        const client = new OAuth2Client(CLIENT_ID);
    }

    async verify(token) {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID
        });
        const payload = ticket.getPayload();
        const userId = payload['sub'];
    }
}

const auth = new AuthService();

export default auth;