import randomNonce from './randomNonce';

const queryParameters = {
  offset:0,
  limit:100,
  filter:"status='active'"
}
const oauth_timestamp = Math.floor(Date.now() / 1000);
const oauth_nonce = randomNonce(11);
const parameters = {
  ...queryParameters,
  oauth_consumer_key: `${process.env.API_KEY}`,
  oauth_signature_method:"HMAC-SHA1",
  oauth_timestamp: oauth_timestamp,
  oauth_nonce: oauth_nonce,
  oauth_version:"1.0"
}

export default function sigGenerator() {
  // filter=status%3D%27active%27&limit=100&oauth_consumer_key=soni_pandey&oauth_nonce=adf979a5b9e6&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1587025108&oauth_version=1.0&offset=0
const signing_key = `${process.env.SECRET}&`; //as token is missing in our case.
let k;
let ordered = {};
Object.keys(parameters).sort().forEach(function(key) {
  ordered[key] = parameters[key];
});
let encodedParameters = '';
for (k in ordered) {
  const encodedValue = escape(ordered[k]);
  const encodedKey = encodeURIComponent(k);
  if(encodedParameters === ''){
    encodedParameters += encodeURIComponent(`${encodedKey}=${encodedValue}`)
  } else {
    encodedParameters += encodeURIComponent(`&${encodedKey}=${encodedValue}`);
  }
}
// return encodedParameters;

const method = 'GET';
const base_url = 'https://www.flickr.com/services/oauth/request_token?oauth_callback=http://www.example.com&';
const encodedUrl = encodeURIComponent(base_url);
encodedParameters = encodeURIComponent(encodedParameters); // encodedParameters which we generated in last step.
const signature_base_string = `${method}&${encodedUrl}&${encodedParameters}`;
// return signature_base_string;

const crypto = require('crypto');
const oauth_signature = crypto.createHmac("sha1", signing_key).update(signature_base_string).digest().toString('base64');
return oauth_signature;

}