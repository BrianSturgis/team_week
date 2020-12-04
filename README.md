# _Nucleus Compression_

#### _A program to compress files for various websites, Dec. 2, 2020_

#### By _**Chelsea Becker, Max Brockbank, Garrett Brown, Glen Buck, Brian Sturgis**_

## Description
Nucleus Compression is a program that allows a user to upload a photo or video and compress it. 
After the media file is compressed, the user can easily upload to file storage websites and/or social media platforms.

## Setup/Installation Requirements

* _Open terminal on computer._
* _Navigate to Desktop._
* _Type "git clone https://github.com/MaxBrockbank/team_week.git" into command line and press ENTER._
* _Navigate to "team_week" folder and enter "code ." into command line and press ENTER to open in VS Code._
* _Create folder titled ".env" in root directory of program. This is needed to store the key for the API._
    * _Create a free account with Cloudinary.com. You will be asked to verify your account through email._
    * _Upon logging in, go to Account Details, and find the following details:_
        * _Cloud Name_ 
        * _API Key_
        * _API Secret_

        Copy the string of characters after these categories into your ".env" file like so:
        * CLOUD_NAME = (Cloud Name string)
        * COMPRESS_KEY = (API Key string)
        * COMPRESS_SECRET = (API Secret string)

        Lastly, go to Settings, click on the Upload tab, and scroll to Upload Presets. There likely will be a default setting (ml_default). Either
        copy this, or create your own preset and use that. Place into ".env" like so:
        * UPLOAD_PRESET = (Upload presets name)

* _Type "npm install" into command line and press ENTER._
* _Type "npm run build" into command line and press ENTER._
* _Type "npm run start" into command line and press ENTER to run program._


## Technologies Used
* _HTML, CSS, Javascript, Jquery, Adobe Photoshop._
* _Node.js, CL, ESLint, Webpack, GitHub._
* _Postman._ 


## Known Bugs
_There are currently no known bugs._


## Support and contact details
_For support, contact:_

_Garrett Brown <garrettpaulbrown@gmail.com>_<br>
_Brian Sturgis <sturujisu@gmail.com>_<br>
_Max Brockbank <maxbrockbank1999@gmail.com>_<br>
_Chelsea Becker <chelraebecker@gmail.com>_<br>
_Glen Buck <glenbuck503@gmail.com>_


## Legal
*This program is available using an MIT License.*

Copyright (c) 2020 **_Garrett Brown, Brian Sturgis, Max Brockbank, Chelsea Becker, Glen Buck_**