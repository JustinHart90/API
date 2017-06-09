const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
const knex = require('../db/connection');
const request = require('request')
const jwt = require('jwt-simple')
const decode = require('jwt-decode')

router.post('/', (req, res, next)=>{
  console.log(req.body);
  let fields = ['id', 'email', 'first_name', 'last_name', 'link', 'name'];
  let graphApiUrl = 'https://graph.facebook.com/v2.5/me?fields=' + fields.join(',');

  let accessTokenUrl = 'https://graph.facebook.com/v2.3/oauth/access_token'
    var params = {
      client_id: req.body.clientId,
      redirect_uri: req.body.redirectUri,
      client_secret: 'e3fdda36e06ffac9fd2112c914af3070',
      code: req.body.code,
      grant_type: 'authorization_code'
    };
    console.log(params);
    console.log("sucess");

    request.get({url:accessTokenUrl, qs: params, json:true}, function(error, response, body){
      console.log(body);

      request.get({ url: graphApiUrl, qs: body, json: true }, function(err, response, profile) {
        console.log(profile);
      res.send(profile)

    })

    console.log(response);

      // // # Exchange authorization code for access token.
      //   r = requests.get(access_token_url, params=params)
      // // # use json.loads instead of urlparse.parse_qsl
      //   access_token = json.loads(r.text)
      //
      //   // # Step 2. Retrieve information about the current user.
      //   r = requests.get(graph_api_url, params=access_token)
      //   profile = json.loads(r.text)
      //
      //   // # Step 3. Create a new account or return an existing one.
      //   user = User.query.filter_by(facebook_id=profile['id']).first()
      //   if user:
      //       return jsonify(token=user.token())
      //
      //   u = User(facebook_id=profile['id'], email=profile['email'])
      //   db.session.add(u)
      //   db.session.commit()
      //   return jsonify(token=u.token())
      //     // var token = decode(body.access_token)
      //     // console.log(token);




    })
  })






module.exports = router;
