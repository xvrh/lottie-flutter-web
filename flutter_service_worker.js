'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9ac26532466ea232831035a296e0ec33",
"index.html": "00fa4d0e5c5956ceb97755d9981ce3d0",
"/": "00fa4d0e5c5956ceb97755d9981ce3d0",
"main.dart.js": "9e545e532df735f76c01ece2b772065c",
"assets/AssetManifest.json": "cf8371ab8ffcdeb6a1b92ccba9650aa2",
"assets/NOTICES": "20b436dce97e1a35fd366694ff35eb4a",
"assets/FontManifest.json": "85feb1333397889a8ac5cb2813a197b7",
"assets/packages/golden_toolkit/fonts/Roboto-Regular.ttf": "ac3f799d5bbaf5196fab15ab8de8431c",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/14595-thumbs-up.json": "4b4cb2af6893316e53405eae64157cce",
"assets/assets/Mobilo/T.json": "0ba96950ee930af8306489016a2d005c",
"assets/assets/Mobilo/A.json": "412af657af4e2da8525f313a35706e4b",
"assets/assets/Mobilo/X.json": "6164056741c65cb99e1fbe386c9127a5",
"assets/assets/Mobilo/BlinkingCursor.json": "712f11dd1dc533cc7a4eb0ae4a1bee31",
"assets/assets/Mobilo/M.json": "0878eb6bd9f6b365d952fe0d5968fca5",
"assets/assets/Mobilo/L.json": "cf7c2c46607da1af02470de7628ec5b3",
"assets/assets/Mobilo/Y.json": "26916b3839aea97a434378d2a9899fca",
"assets/assets/Mobilo/U.json": "e21b1367cccbe1ae80ba659b30949295",
"assets/assets/Mobilo/K.json": "3bbd8951ee01305cf19c287160419a17",
"assets/assets/Mobilo/R.json": "926b134975772d7b624ce9e70947e6b2",
"assets/assets/Mobilo/G.json": "21b2196ff26493b018447ef0067a0cd0",
"assets/assets/Mobilo/F.json": "ea997af241c451c1267ff8d3a3793971",
"assets/assets/Mobilo/S.json": "ad3fd87f59df5395ac204accd4c43adc",
"assets/assets/Mobilo/J.json": "0110d086699d4b29ed6efbc11e797913",
"assets/assets/Mobilo/I.json": "88314c31350bb00db65fb457ecf818b3",
"assets/assets/Mobilo/E.json": "483a4fbedcadd15362e0342a54d4e80c",
"assets/assets/Mobilo/Apostrophe.json": "e374ac4eb54d4871b08583bec5eb4189",
"assets/assets/Mobilo/P.json": "87bc45dafdfe2966aeb728c41ed0937c",
"assets/assets/Mobilo/Q.json": "a71ca0eecb45a61cd164115267be5338",
"assets/assets/Mobilo/D.json": "a2c2ee1fb47d196b255bcd966591fb92",
"assets/assets/Mobilo/Colon.json": "544b0d2db5632e0e74ec835e1d9b6072",
"assets/assets/Mobilo/H.json": "b9520754ad434d8a9333589e7c1a973a",
"assets/assets/Mobilo/C.json": "78b146f8f60d7eb8bb03057c29fc85e5",
"assets/assets/Mobilo/V.json": "52c2ddf8a2d172ba51b533b187b58e5a",
"assets/assets/Mobilo/Comma.json": "70810d6438268e636ea7b72c8ea942ac",
"assets/assets/Mobilo/O.json": "1bf5454379a3422c064ca37cebd73750",
"assets/assets/Mobilo/Z.json": "98b859b787448f815cc25af3e725d0bb",
"assets/assets/Mobilo/N.json": "2ba8b9dace63cf51c760cafa6d736746",
"assets/assets/Mobilo/W.json": "8743e73b4d15914f654a75c927cd7d02",
"assets/assets/Mobilo/B.json": "720e98b830c6ab33be7619a22efbfd7f",
"assets/assets/TwitterHeartButton.json": "cb2fd8619511ae91ca49de89fad31236",
"assets/assets/Images/WeAccept/img_0.png": "cffd688e7e3dec54a0d0c3b29da10566",
"assets/assets/HamburgerArrow.json": "4d4aa5322d9637201e30d893198c7b51",
"assets/assets/tent.json": "a9f0e9f7c921e176f66304822542ec69",
"assets/assets/Tests/Remap.json": "a3d3a28201ab0284d378f7229b8dd7f3",
"assets/assets/Tests/Airbnb400.zip": "62c938e8ba3101c44bd3618621a3a89b",
"assets/assets/Tests/catrim_converted.json": "264d4b2f0eb83d0cc47a155832cab5c7",
"assets/assets/Tests/StartEndFrame.json": "cd66f108f59ab647724c0975019047b5",
"assets/assets/Tests/TrackMattes.json": "3d124531f590620d4000cc60b91e7409",
"assets/assets/Tests/DynamicText.json": "7b4b7e565829d80af32ef861b03bdd4d",
"assets/assets/Tests/Precomps.json": "5102b1ab008db5c1b7b24f07f361fd90",
"assets/assets/Tests/2ParentsMatte.json": "e682f3b602f63a5a134a333d2f4a7052",
"assets/assets/Tests/2FrameAnimation.json": "599fbe1fd1eafb2ec4bd5cdbfe977ab4",
"assets/assets/Tests/LoopPlayOnce.json": "a631bf6fcaa3a2ddeecb43c2a967623e",
"assets/assets/Tests/bm_converted.json": "141fdcb1e6f4a7504adca9ffac7153a1",
"assets/assets/Tests/RGBMarker.json": "e479eb1fc6879cd51e7a503e2ebc8aeb",
"assets/assets/Tests/WeAccept.json": "c7e86f68a7c4441644dfa4fb125047f6",
"assets/assets/Tests/MiterLimit.json": "fdfc65aa67adf7d994fd6207a85b0101",
"assets/assets/Tests/dalek.json": "fa9dd766686700fbfd621277782e0708",
"assets/assets/Tests/MaskInv.json": "289e7f440c85dd199dd60df432eb36ad",
"assets/assets/Tests/MatteTimeStretchScan.json": "7523813d6d48b67ebe7dc2b16bb52810",
"assets/assets/Tests/Marker.json": "8b6220bd7d4509cfcbe7beba53e8a637",
"assets/assets/Tests/TrimPathsInsideAndOutsideGroup.json": "93539458e0685319c5fe014360f30695",
"assets/assets/Tests/MaskNone.json": "4a8eef8a0bec16b509369c52739147c1",
"assets/assets/Tests/Text_Justification_Translate_Scale_Rotation_Text.json": "58712a6ca33bced2f7e5665642c1faf4",
"assets/assets/Tests/images/img_0.png": "cffd688e7e3dec54a0d0c3b29da10566",
"assets/assets/Tests/TelegramAlphaCompat.json": "f656a78ad9c91ef23e5a87e94db89429",
"assets/assets/Tests/InterpolatorLoopBack.json": "c2dc6466b0bf5fe55c27ed7c3ce4416c",
"assets/assets/Tests/SplitDimensions.json": "23c47c93fc4adf66a5ed06ef5a12952b",
"assets/assets/Tests/EndFrame.json": "957295a10f68374e7a88507edd98df58",
"assets/assets/Tests/RGB.json": "236746e8555241c2f46f3c9d1c3bd66e",
"assets/assets/Tests/DynamicGradient.json": "8f36e318d7f4703a33dc23a5356b2c33",
"assets/assets/Tests/Font_Text_Justification_Translate_Scale_Rotation_Test.json": "5b6d31421a71f4a7368654d5890693c8",
"assets/assets/Tests/adrock_converted.json": "a42358f4d9fe3605e49650a1c29ba49b",
"assets/assets/Tests/ShapeTypes.json": "06fa3edd42980f68b873605ad08a7067",
"assets/assets/Tests/Squares.json": "bdc725729b305a868e2736f00407b07a",
"assets/assets/Tests/Parenting.json": "94375753b663a6a319c0b751ab4db8ce",
"assets/assets/Tests/catrim.json": "c0cc5dc870b3c4f1013a756daeb00ffa",
"assets/assets/Tests/Stroke.json": "3d451fdb13d68caae9b8e6a4a851adaf",
"assets/assets/Tests/TimeStretch.json": "cb725dafa41671a2437e699e5532c122",
"assets/assets/Tests/CheckSwitch.json": "d390be2b9c1fd1e08404f88b53a9bc09",
"assets/assets/Tests/hd.json": "6075c45351f45472bd1c0f36e02c8da4",
"assets/assets/Tests/OverlapShapeWithOpacity.json": "cb1039ff81522d0a2867577b1d489532",
"assets/assets/Tests/Shapes.json": "35a56e9a895a00aef903698ad172ae5f",
"assets/assets/Tests/Masks.json": "f69d5963c43bed4f6c89bf70de2477c4",
"assets/assets/Tests/SolidLayerTransform.json": "b4c0b3530471327b45c76ef3c67a17b5",
"assets/assets/Tests/WeAcceptInlineImage.json": "0ff81cf00aa4e4edf5d477d9def36852",
"assets/assets/Tests/TrimPaths.json": "39a785b2a18a57673bea8f5b2ed46d88",
"assets/assets/Tests/Airbnb.zip": "5ad5108daa6b5c900b96029a5088a2e7",
"assets/assets/Tests/TimeRemapAndStartOffset.json": "c7648d4fc8860459e5a80ad3127acdc9",
"assets/assets/Tests/DifferentPointsCount.json": "6580eb0aa7695c907a87b3731fa92e05",
"assets/assets/Tests/Skew.json": "ff310d0dfeea0f5aee2cb9ca43b0b4c8",
"assets/assets/Tests/GradientFill.json": "c7f9339911814b104ea9810bacae0033",
"assets/assets/Tests/TransformWithoutEndValues.json": "b1c0d100f08b10674d2adcb79e47e627",
"assets/assets/Tests/EllipseDirection.json": "ba40cc4574f3a24aecb52d53c5d946aa",
"assets/assets/Tests/TimeStretchMask.json": "f41a1b94e178a882635c0fd98b2fa52d",
"assets/assets/Tests/Frame.json": "90dd77f53a38d3cfa27f916b53e53001",
"assets/assets/Tests/map.zip": "2691c8b380bb56fd3e8eaecb3fbcb9ba",
"assets/assets/Tests/august_view_pulse.zip": "fe6af04d375eba4b0e7aa514492127a9",
"assets/assets/Tests/KeyframeTypes.json": "b1d4dc919b540731fc370012a732666c",
"assets/assets/Tests/dalek_converted.json": "595cea1425250712f6deb2ed2e4cffdc",
"assets/assets/Tests/Laugh4.json": "b090e961db3d3e9797f2949bf14ca5fa",
"assets/assets/Tests/Scale0.json": "0712eeab1b9d997e59d9e05b5bd58395",
"assets/assets/Tests/StarSkew.json": "a90ec7655c25ec872d8077f7ced1aacb",
"assets/assets/Tests/TextBaseline.json": "de2507b5cfa1c43af62ee80f43c16175",
"assets/assets/Tests/Text.json": "64e58081c83aaa2caba11e93a6c741eb",
"assets/assets/Tests/bm.json": "7a3b194dc9e40508f082a157a8f62e7d",
"assets/assets/Tests/Fill.json": "8558064bf3057ed1ec91398c33ee38f1",
"assets/assets/Tests/MaskA.json": "23dba32a44198b4c0b9efe1b528ecf4f",
"assets/assets/Tests/Repeater.json": "beb3f4df83ac102d4be699666a273113",
"assets/assets/Tests/TimeStretchPrecomp.json": "6ffc39dbf48013a7fa4eae2b4fb1e9ca",
"assets/assets/Tests/adrock.json": "09b1a4c234ae161d8db7247476e61ed7",
"assets/assets/Tests/MatteTimeStretchLine.json": "30fe6a96731b34c4f59370ba6357d4fd",
"assets/assets/Tests/Airbnb800.zip": "e458800707b5d86ff8d467ee307cbf33",
"assets/assets/DynamicGradient.json": "8f36e318d7f4703a33dc23a5356b2c33",
"assets/assets/LottieLogo2.json": "f86b43d627af9dac86737284e704ec94",
"assets/assets/camera_change.json": "9bdbeecd559f04c93aba6184b4a347b8",
"assets/assets/AndroidWave.json": "746323345a412dc07ac16be7f5c07c79",
"assets/assets/playing.json": "55e60c2f005eb2c8f445244c382d3bd7",
"assets/assets/spinning_carrousel.zip": "12790a5d273d73b54f18843341df4fa6",
"assets/assets/LottieLogo1.json": "07e6d1f37a8ff5a69e540ee85d2fb6e3",
"assets/assets/Logo/LogoSmall.json": "8a2a72c442e37ceec8349515d68e2f19",
"assets/assets/17297-fireworks.json": "ec044d733ba18c777ff1c7495c565e3b",
"assets/assets/example_with_images/images/img_1.png": "9ed326e60cff450c64a400d4bc8f938a",
"assets/assets/example_with_images/images/img_0.png": "f7e1df88688f168e009b7ba2251abf10",
"assets/assets/example_with_images/images/img_2.png": "3c741ef19291770c0ad50d5b12ae7236",
"assets/assets/example_with_images/images/img_3.png": "2270e17c4d1754acc5e31bdffe7cc051",
"assets/assets/example_with_images/images/img_7.png": "7e13b47fc6eb1c3dfe511d9ec0d88627",
"assets/assets/example_with_images/images/img_6.png": "f42e78aa3818a59056be31a2592517c3",
"assets/assets/example_with_images/images/img_4.png": "d93541331df8d6f678b508afa1e8d38a",
"assets/assets/example_with_images/images/img_5.png": "3273526218ddff6144f26b61e0338429",
"assets/assets/example_with_images/images/img_0.svg": "cdc3b3328014a3e06c7a9c4f243e8574",
"assets/assets/example_with_images/images/img_8.png": "802c105b9d16423fe7ae496b74f40419",
"assets/assets/example_with_images/images/img_9.png": "ce091b2492c0d3ac8df9f2f029499766",
"assets/assets/example_with_images/data.json": "1591ead6bb3508e3e2e9664254caba95",
"assets/assets/lottiefiles/the_final_frontier.json": "a82aabae4fdcaf789dedbe70585013da",
"assets/assets/lottiefiles/material_loading_2.json": "cede78163de2886b349d43388dc783de",
"assets/assets/lottiefiles/material_wave_loading.json": "b90bcb6ceb76c0b8d884749a00dc68e4",
"assets/assets/lottiefiles/finish,done.json": "848d4312f678913506779afed04ce841",
"assets/assets/lottiefiles/rocket.json": "852c6793090f97d7a743f88afafbead0",
"assets/assets/lottiefiles/chinese.json": "c4268188653e7dce8d1305829ab9ffcf",
"assets/assets/lottiefiles/cubo_livre.json": "49ff0d516b3ce41d0679a53a41ac20fb",
"assets/assets/lottiefiles/slack_app_loader.json": "db53b68f3f22d64b0258ed9201df78c0",
"assets/assets/lottiefiles/no_internet_connection.json": "93be19a200d0f5696f94f926b9f8b83a",
"assets/assets/lottiefiles/img_0.png": "c2a67a7c5a59b18e957a9b3d4b64afb4",
"assets/assets/lottiefiles/moving_eye.json": "5a27024746b195515d0b85a15e4d746a",
"assets/assets/lottiefiles/star%25202.json": "42e14b84b728857a9f613eaece1a8c3e",
"assets/assets/lottiefiles/downloader.json": "9a3c3dd9c276b4315f7c6d0aed995987",
"assets/assets/lottiefiles/poo_loader.json": "9f52f8dd1c1d03ce3a0d43dc08578e65",
"assets/assets/lottiefiles/airbnb.json": "92af86e1f9d3d9ea6df38a0a914630c1",
"assets/assets/lottiefiles/phonological.json": "ab3fd2e64e614666918b08c0bb6bf766",
"assets/assets/lottiefiles/camptravel.zip": "19d29890b1dc0b67745b343bf8629066",
"assets/assets/lottiefiles/bounching_ball.json": "5f976bc6b4159f0ae061f2e45efc5bad",
"assets/assets/lottiefiles/walking.json": "482247ed79300129efb19b17f4574f2e",
"assets/assets/lottiefiles/coding_ape.json": "5ff0f32475524583922c088f1431336a",
"assets/assets/lottiefiles/clock.json": "412214163d4b390ff4e443f7c945a1fb",
"assets/assets/lottiefiles/timer_(3_second_loop).json": "9e19a5b10afd2cd1d3fdf4c135611360",
"assets/assets/lottiefiles/file_error.json": "49260a469b967b10e7b9e91158efbdcf",
"assets/assets/lottiefiles/android_fingerprint.json": "f536f82db612ad9f7ce5dd005ed16bd7",
"assets/assets/lottiefiles/patient_successfully_added.json": "04e54a94ab806236a18ee8cfdee2439b",
"assets/assets/lottiefiles/toggle_switch.json": "8463aded0968c870b4257c30b8190c65",
"assets/assets/lottiefiles/notification_request.json": "fed680106b987299fe18228c4d496175",
"assets/assets/lottiefiles/tractor_animation.json": "11cbb52f00b439564dad90c88fb6200c",
"assets/assets/lottiefiles/Plane.json": "c9d220d6aac640a7e173a52affbc3188",
"assets/assets/lottiefiles/retweet.json": "df73d4e26a229b6f1720b7253c5b3715",
"assets/assets/lottiefiles/blood_transfusion_kawaii.json": "9bfc7add87b8dfe922889394609bb0c8",
"assets/assets/lottiefiles/45668-arrow-with-light-passing-through.json": "ac238cddb657639684aa1236db78bed5",
"assets/assets/lottiefiles/truecosmos.json": "95b1539e77d528e0000cdcb161844e7a",
"assets/assets/lottiefiles/banner_animation.json": "e2db43f629dc004710d90be208df2c2c",
"assets/assets/lottiefiles/gears.json": "a65970af8625ccb7c6990e8cadbafe05",
"assets/assets/lottiefiles/flag_of_mexico.json": "144f9bf5d7a222a06c826b164f67f76c",
"assets/assets/lottiefiles/location_pin.json": "72f6071f1389b0ff4d26c8e79c2bf135",
"assets/assets/lottiefiles/play,_pause.json": "076e7147cf43d1c40047cc8bae2481fd",
"assets/assets/lottiefiles/panel2d.json": "897656a13d56d252b59dc5ecd9811b71",
"assets/assets/lottiefiles/emoji_tongue.json": "c3da55a5e8a3e2a2b15722e71b791255",
"assets/assets/lottiefiles/jolly_walker.json": "bd9ba012c390e9c57f8eeb05dd513caa",
"assets/assets/lottiefiles/switch_loop.json": "5a8a64eda4fc3fa39b5a852446411c5e",
"assets/assets/lottiefiles/download%2520copy.json": "67cdcfebf5b5b9f0cc76ff6c970cadf0",
"assets/assets/lottiefiles/intelia_logo_animation.json": "5e93f7dd83c6029948b2b2edba350259",
"assets/assets/lottiefiles/credit_card.json": "0e78304901e719f82e03d51c110a0184",
"assets/assets/lottiefiles/empty_status.json": "792fde25251559490c928a33b7120afb",
"assets/assets/lottiefiles/autoconnect_loading.json": "731e1f93c663e7738c4e57c1d8010a76",
"assets/assets/lottiefiles/camera.json": "f52ef6df76c6c7e7b4d5552d48c0cccc",
"assets/assets/lottiefiles/volume_indicator.json": "70d07ef262d16b2895ef9dcb5987b99a",
"assets/assets/lottiefiles/bell.json": "ba3bdd6a6b68a4b2b4c2821fbe1b7461",
"assets/assets/lottiefiles/colorline.json": "f4c5fb2349a3fecc37644f9c4fafbaa4",
"assets/assets/lottiefiles/loading_copy.json": "8140dee112e141cd5c53c04e5727cb58",
"assets/assets/lottiefiles/mailsent.json": "bb6bed85d2ee65f73fd456c8f38c30e0",
"assets/assets/lottiefiles/square_drop_loader.json": "504dd1df00702a87d821556c231a027a",
"assets/assets/lottiefiles/gradient_animated_background.json": "58bbd23299d5113ed52d5db8eed681b6",
"assets/assets/lottiefiles/vr_animation.json": "a3449c4288ce005059cd06c5cdce145c",
"assets/assets/lottiefiles/rocksauce_title_card.json": "595e701a011397ca8ca4fe9bdaf00ec5",
"assets/assets/lottiefiles/streetby_test_loading.json": "e0db952ccfc79dc732af59d1ce7878e5",
"assets/assets/lottiefiles/hardware.json": "da42ff68a80d9c97a5ec6fd32d69c4c9",
"assets/assets/lottiefiles/man_and_pay_with_credit_card.json": "81cf791e0de7f5c7088a2b64397d9c16",
"assets/assets/lottiefiles/tractor.json": "65c211f9717e55fa055d23601cb994a0",
"assets/assets/lottiefiles/brain__.json": "edf03269cd8389687c68c0fa0f5a4062",
"assets/assets/lottiefiles/summer.json": "040aeea02efa2c2229607cc1445090a0",
"assets/assets/lottiefiles/passport.json": "f3c91393fe4b7f641b367324b229e7da",
"assets/assets/lottiefiles/drop_to_refresh.json": "bb953753064adc72e3c718ebbeba493d",
"assets/assets/lottiefiles/penguin.json": "3d10e003a30725d332d8c10e762deae6",
"assets/assets/lottiefiles/location_marker.json": "29730a73a7338a793573107ac854d08d",
"assets/assets/lottiefiles/dna_loader.json": "6b461120760ddc5fa80c0564ede619b5",
"assets/assets/lottiefiles/geometry.zip": "787b2deb1214a9aed3f34caf10096d76",
"assets/assets/lottiefiles/pink_drink_machine.json": "d215fcefee5bef497965c10f4c9183d2",
"assets/assets/lottiefiles/sensor_scan.zip": "0c2a029942acb1f0a64c806a9dd6cb17",
"assets/assets/lottiefiles/fingerprint_scanner.json": "e37183bb20afc481409e85c7fab18a4f",
"assets/assets/lottiefiles/play_button.json": "c3566f0f7b6df959a9525fbf07c7bac4",
"assets/assets/lottiefiles/jojo_the_bird.json": "9edf8f4f45f8d3df0cf7d07d9b2fd1dc",
"assets/assets/lottiefiles/cloud_disconnection.json": "051060ba168ebebe63ac3c7b881efccc",
"assets/assets/lottiefiles/dog.json": "6c802e21c048997b786ad408248c01c2",
"assets/assets/lottiefiles/loading.json": "38bbb2732d185907d1b6d08706cc5551",
"assets/assets/lottiefiles/curly_hair_character_loop.json": "9809816aaa66b026b6f713c2f68ea3c2",
"assets/assets/lottiefiles/india.json": "fe42cdaba1a5f8bef68ef3d8e4987520",
"assets/assets/lottiefiles/anima.json": "82bfb2d8298a3f54146a64371138129e",
"assets/assets/lottiefiles/volume_shake_indicator.json": "41fc056356b3c2952a9dcb0c28941eb5",
"assets/assets/lottiefiles/images/img_0.png": "c2a67a7c5a59b18e957a9b3d4b64afb4",
"assets/assets/lottiefiles/rating.json": "3bd25ca059de5a7529cc3544e0b8e284",
"assets/assets/lottiefiles/birds.json": "a341f57c97c48498109c70eeddfe72c8",
"assets/assets/lottiefiles/in-app_purchasing.json": "f8934173ca59a2155e6a04fea6182987",
"assets/assets/lottiefiles/rejection.json": "d36468dea5d7bd0e83efbe515706ea6e",
"assets/assets/lottiefiles/judgement.json": "a1691619237f2149d0e63095a3defe0a",
"assets/assets/lottiefiles/splashy_loader.json": "2ca32d39f1723360aa856c0057bd0ad2",
"assets/assets/lottiefiles/construction_site.json": "cffca3a23ff67b85651c8d8935615d5d",
"assets/assets/lottiefiles/download.json": "0298fc0dacdf01ff7b1ad68ebe136a34",
"assets/assets/lottiefiles/uk.json": "cedd5160e2e87fd4d9ea3d241e92826a",
"assets/assets/lottiefiles/location.json": "8b3e7de2632792287826148c03d79ebf",
"assets/assets/lottiefiles/change_to_search_bar.json": "362233819c4d028eb50649d4db3a9a9f",
"assets/assets/lottiefiles/x_pop.json": "afcd137ffec67e11a237560465fdfb44",
"assets/assets/lottiefiles/socar_logo.json": "6429ff50e725d56b7b93fc10036166a7",
"assets/assets/lottiefiles/fish.json": "da4b0e5e299fd1932be1a80d54aa0dc1",
"assets/assets/lottiefiles/landing_page.json": "6925d724374d1c0ac5dd03393ac326da",
"assets/assets/lottiefiles/moving%2520bus.json": "8a81d47f713549d989fb5588fc8d1d2c",
"assets/assets/lottiefiles/loading_disc.json": "1b806e177ca436e1a6e6fd19f72bd6ad",
"assets/assets/lottiefiles/turbine.json": "63a9508c9a86b8e760d25f1e0593c101",
"assets/assets/lottiefiles/ofrenda.json": "1c6253127814aef7ec4c995afcd78907",
"assets/assets/lottiefiles/emoji_shock.json": "46cfab6f39130106d8d19adcd690266f",
"assets/assets/lottiefiles/sky.zip": "0c443e751cf66b74311bad50bb6d2551",
"assets/assets/lottiefiles/bb8.json": "d820155a0901cd760f19fe939f7661c0",
"assets/assets/lottiefiles/im_thirsty.json": "8420771698dc4bf5393451060e01485a",
"assets/assets/lottiefiles/permission.json": "0296bcd907aa11d9d8e87410dfcf88a2",
"assets/assets/lottiefiles/animated_logo.json": "62f1ac81d2c9a1d2e7a0fdbdfbe3c826",
"assets/assets/lottiefiles/youtube_icon_reveal.json": "9ff8c3a8971e81d9a7f9381b57f10d75",
"assets/assets/lottiefiles/fab_animate.json": "d595645b720bf0420cf10d1abaa40929",
"assets/assets/lottiefiles/money.json": "efe57d1a8e58e5fdb28583fdc7190bc3",
"assets/assets/lottiefiles/pagado.json": "890b70fa8d95afe4955e52b137d9dd10",
"assets/assets/lottiefiles/servishero_loading.json": "da979ba26e8e795542a0a4b5d3d31059",
"assets/assets/lottiefiles/me_at_office.json": "d34e46b5839c87a95db8ec6245d4ef52",
"assets/assets/lottiefiles/swiftkey-logo.json": "6198b37f96364a27869d563d1ffbfe0d",
"assets/assets/lottiefiles/favourite_app_icon.json": "c6d66d75e66a191491b6219c7e415dd5",
"assets/assets/lottiefiles/atm_link.json": "6c3534af4080ea5472fe4ad4ef9511ef",
"assets/assets/lottiefiles/emoji_wink.json": "2ab33c45f043379879d76b20ad852fd0",
"assets/assets/lottiefiles/preloader.json": "a470e7c0d59612a5e1e04cf844f47863",
"assets/assets/lottiefiles/us.json": "095b20e30f77bcc135747f3d10327a08",
"assets/assets/lottiefiles/progress_bar%25202.json": "d8943bebd497f288df0e82537cfae80d",
"assets/assets/lottiefiles/soda_loader.json": "4e23fd45b419521c68d5343b6f30e64a",
"assets/assets/lottiefiles/play_and_like_it.json": "02482767b6a46f66a4b874cbb7b1df3a",
"assets/assets/lottiefiles/trophy.json": "dfb703e6e433abd70af9962ae4a0bc59",
"assets/assets/lottiefiles/trophy_animation.zip": "f0c802deb23851d52089ea5a20b271ac",
"assets/assets/lottiefiles/countdown.json": "f67e7b8618e97134217fd3ae77e16f8f",
"assets/assets/lottiefiles/glow_loading.json": "09d3e8ef9e76c74b01f1f53b22177db6",
"assets/assets/lottiefiles/submit%2520button.json": "b35ff76b170bcc7b5c6fa4264da9d0ec",
"assets/assets/lottiefiles/developer-animation.zip": "12a6b091012eb63091203028ab7ca272",
"assets/assets/lottiefiles/bitcoin_to_the_moon.json": "5c300338bd864f0ebe46f78bb713b6d3",
"assets/assets/lottiefiles/credit_level.json": "dc24c574ba6ed7a62c24e3f1d9e0c710",
"assets/assets/lottiefiles/medal.json": "000fcfad5c128d4166fc2a7c2b1dbd70",
"assets/assets/lottiefiles/xamarin_logo_2.json": "e97c1b7fe93b1e3ee0800e31c5b5cf0b",
"assets/assets/lottiefiles/done.json": "af71ab9a3294ad00197d66991b046ed2",
"assets/assets/lottiefiles/plane_to_dollar.json": "7797dc60e9b9fdbae3d611caf8e91101",
"assets/assets/lottiefiles/octopus.json": "e4cadee540298a2035d4f4d2a60ffc85",
"assets/assets/lottiefiles/finance_animation.json": "6c13caa029aee189661545402a61a809",
"assets/assets/lottiefiles/28861-connection-style-2.json": "aaec618db316e8e1674397e2ff04b3a2",
"assets/assets/lottiefiles/frog.json": "fe9f4045c479c25d7c29eedf168ca08e",
"assets/assets/lottiefiles/yoga_carpet.json": "cebac6d7b26c8a925c964178b3c37df7",
"assets/assets/lottiefiles/sushi_and_wine.zip": "5197b426ba6270a11873568070c0f30f",
"assets/assets/lottiefiles/payme.json": "5dbf68e7a0ec4ae422188059b4bb9f90",
"assets/assets/lottiefiles/lego_loader.json": "c593f09f2568d521eb9b202a754366f7",
"assets/assets/lottiefiles/happy%2520birthday.json": "5b12896afb3a09bb0d3a54c6bf4b3683",
"assets/assets/lottiefiles/deadpool.json": "f2f6f3abba37c65d9d9b240df650d8cc",
"assets/assets/lottiefiles/updating_map.json": "ca632b9fec593f177fd0d9c748e92a1b",
"assets/assets/lottiefiles/elephant_trunk_swing.json": "769128432fd192a302aef012b0879afe",
"assets/assets/lottiefiles/lottie_logo_1.json": "07e6d1f37a8ff5a69e540ee85d2fb6e3",
"assets/assets/lottiefiles/tigerobo_demo.json": "9e98facd40ae33b5d241acb5d96d2d05",
"assets/assets/lottiefiles/100_percent.json": "85a51fadf0880b4b9ccaaad905dc5640",
"assets/assets/lottiefiles/flow.json": "8d8063dd77ae15663de03f211a29375b",
"assets/assets/lottiefiles/hint_01.json": "9b43e8bd12e39cff5c01de4088114a33",
"assets/assets/lottiefiles/light.json": "e2ab731b13ab3ff13c6ceba7e78ad69a",
"assets/assets/lottiefiles/little_girl_jumping_-_loader.json": "346dc60051bedbeaa919f1cfd4bd8087",
"assets/assets/lottiefiles/red_pocket_pop_up.json": "90fb57173ce9b95fea48bb371b2dce44",
"assets/assets/lottiefiles/playing.json": "002058943a833929b94d19c4df82e66a",
"assets/assets/lottiefiles/motorcycle.json": "0ba1c2c6d2511a1a1be0f3387f8f3652",
"assets/assets/lottiefiles/infinite_rainbow.json": "5d2a6c7f6d900e2f4f0ee80777673873",
"assets/assets/lottiefiles/print.json": "6554383cfa88fa50eb0dfd89f40e61c7",
"assets/assets/lottiefiles/powerupp_app_onboard.json": "03dca05efd80d0c70ad108b6d573c537",
"assets/assets/lottiefiles/cycle_animation.json": "da5b696132a7002af479a0b83755072d",
"assets/assets/lottiefiles/vigilance_camera.json": "b4cc1e8ea203402dfcd518a6733a38d4",
"assets/assets/lottiefiles/code_invite_success.json": "dbc144c79b6dd2342881b0743f9c4b1c",
"assets/assets/lottiefiles/walking_arrow.json": "55056ca7b155db45b2437378577050a8",
"assets/assets/lottiefiles/pen_tool_loop.json": "c76e9da114456b7f2340e31f285bef46",
"assets/assets/lottiefiles/mnemonics.json": "1b5bc958d56e957407970c12b5ab66f4",
"assets/assets/lottiefiles/bootymovin.json": "d0c55c448d987465461f8f0ddbe77ddb",
"assets/assets/lottiefiles/books.json": "a0f65c5e368cd8a44da7c5756cd61039",
"assets/assets/lottiefiles/angel.zip": "7a275062db48fe882d1cbba4ed40da04",
"assets/assets/lottiefiles/building_evolution_animation.json": "d4204ac390225a9bb0a06c884336b553",
"assets/assets/lottiefiles/edited-landscape.json": "68791000155e1c9e05fbcc8e7029bc58",
"assets/assets/lottiefiles/accept_arrows.json": "0bd210f5904fe6b1df59e3d68c1bf966",
"assets/assets/lottiefiles/mindful.json": "55ac358509d25da67b29e367c943da9b",
"assets/assets/lottiefiles/gaming_pad.json": "4a1795badc736f8a525e2cea562eefd1",
"assets/assets/lottiefiles/menuButton2.json": "c5f452d16f862cbeed15e31c29e2975d",
"assets/assets/lottiefiles/wolf_peek.json": "0c7bd05b12710dff4a7c27615cfdc30e",
"assets/assets/lottiefiles/security_token_roundtable.zip": "ead59249d8cd7465cce17f3622dcf857",
"assets/assets/lottiefiles/day_night_cycle.json": "d73bf7c5a410e26525263de459f7f6d8",
"assets/assets/lottiefiles/cancel_button.json": "b1b19978061ccbe77f41d706cd9261c7",
"assets/assets/lottiefiles/menu_button_alt.json": "c5f452d16f862cbeed15e31c29e2975d",
"assets/assets/lottiefiles/animated_graph.json": "e9df043f7eff35cd6ca12c1f4b24efbb",
"assets/assets/lottiefiles/point.json": "23221aa6714bb24a37862b6a8e74632d",
"assets/assets/lottiefiles/search_button.json": "344eb773bf2c2d294e58ec9806399ac2",
"assets/assets/lottiefiles/a_mountain.json": "c9883c81e843c8d3febd6b6a3352c0fd",
"assets/assets/lottiefiles/on_off_settings_switch.json": "1e85668d7ff1e7e0b59fa78574991c0e",
"assets/assets/lottiefiles/kod.io_logo_reveal.json": "143dddd52673093930a246d303ae80f6",
"assets/assets/lottiefiles/animated_laptop_.json": "1b61a2f08983c333866f3f180bb49cc7",
"assets/assets/lottiefiles/simple_loader.json": "1ea805503fcecdc6d3738d0813e940d9",
"assets/assets/lottiefiles/personal_character.json": "2e09f2edda4633f6ad2a78f2b47eb30f",
"assets/assets/lottiefiles/check_pop.json": "6e5d51c747289373f91a92fb1b4a8d34",
"assets/assets/lottiefiles/xuanwheel_logo.json": "d1f3e2f2e9eaa1fb694bc7b6e1ea0a86",
"assets/assets/lottiefiles/lightsaber.json": "c53f2519d231b78087556bbcb3651a3d",
"assets/assets/lottiefiles/wallet%2520recharge.json": "6078e4fc9545d46850abd03552c77c5c",
"assets/assets/lottiefiles/peli-canon.json": "7ad817e643bdccba03ca8b367eb4bfdb",
"assets/assets/lottiefiles/typing%2520dot.json": "2fbcb6089befaf13858706a74dca7cdc",
"assets/assets/lottiefiles/spinner%2520loading.json": "1979a24b4caed526e3b8ac349c6eda33",
"assets/assets/lottiefiles/map_animation.json": "386d868e03b666c96d40c759984bf7fe",
"assets/assets/lottiefiles/funky_chicken.json": "2ba673bc367d50fded8ad4fd74fcd4e2",
"assets/assets/lottiefiles/ball_&_map.zip": "0749719b093d0cec7b378ccc6d3ea9eb",
"assets/assets/lottiefiles/snowcation.json": "ae1e0b9f7d03cd40c2e1cd25511797fb",
"assets/assets/lottiefiles/estimate.json": "75222fbee864072f55b17c1bbf935659",
"assets/assets/lottiefiles/delivery_van.json": "f563d53dccd3d766187995bd1c6c3e95",
"assets/assets/lottiefiles/spacehub.json": "46e7579cd9cbaf3cb9835767331f1329",
"assets/assets/lottiefiles/swipe_right_indicator.json": "41e106fa1d3c718f471b52195057a9ce",
"assets/assets/lottiefiles/pagination.json": "51d29fee7ac1adbec352b89eadf380a2",
"assets/assets/lottiefiles/confusion.json": "7e948156241eddccd91c42b15aaee455",
"assets/assets/lottiefiles/coinfall.json": "10432f078f7d0b37ec2fb9f1e62ed173",
"assets/assets/lottiefiles/fabulous_onboarding_animation.json": "32d2069e8d036b65fb461594b1b887b8",
"assets/assets/lottiefiles/win_result_2.json": "8d6d17a35ff8c986416278a462ede3ed",
"assets/assets/lottiefiles/scan.json": "8f37606ff69592b061ba9e2cb889a94f",
"assets/assets/lottiefiles/la_calavera.json": "f802b9e4a52f71a92cd55b325e2c9bd2",
"assets/assets/lottiefiles/drop.json": "5854efe1a0c60d243d4123d7a5f08408",
"assets/assets/lottiefiles/scan_qr_code_success.json": "6103f00ee716489f028bbdffc460363d",
"assets/assets/lottiefiles/loading_semicircle.json": "31f8b377679f4bc48381e56ded6bcbdc",
"assets/assets/lottiefiles/immiguide_.json": "08464ef4eaeb19f2dc062c5cdfc69a84",
"assets/assets/lottiefiles/vr_sickness.json": "c89cfd8b2f455de93dd023b956d3abcf",
"assets/assets/lottiefiles/cash.json": "5f37f01aad411678c32371a25cc66eea",
"assets/assets/lottiefiles/ph_onboarding_.json": "68fdef351ca5ef57b7e05c8857c6f355",
"assets/assets/lottiefiles/video_cam.json": "f7fa3662b4098c77e76b5b626387ff5a",
"assets/assets/lottiefiles/material_loader.json": "1371c31a55d4a35464feff036ffe24de",
"assets/assets/lottiefiles/toggle.json": "9a76f4391abb3001b87c3258d3b02fcc",
"assets/assets/lottiefiles/material%2520loading.json": "1a3c076801980e62594a4d999faf7ebb",
"assets/assets/lottiefiles/browser.json": "4c504e032c46664a0c090b97ba773f06",
"assets/assets/lottiefiles/day_of_the_dead.json": "a7dda4d8dd6b7d4accd9bf1abb3fabaf",
"assets/assets/lottiefiles/cube_loader.json": "896036f7e0adb728fc4d3a01cc1f4549",
"assets/assets/lottiefiles/washing_machine.json": "f52aef276d05e222a219d2d154fb9666",
"assets/assets/lottiefiles/pencil_write.json": "486108dfefa0fe58b66c2615fd3a8ccf",
"assets/assets/lottiefiles/progress_bar.json": "4431a3608d3e4b15dddfd7e08115c7c3",
"assets/assets/lottiefiles/iphone_x_loading.json": "9417001c234259994eaba7f47a94cc17",
"assets/assets/lottiefiles/bomb.json": "29df702c6b816df44aa43ac5df6022b4",
"assets/assets/lottiefiles/swipe_menu.json": "c7081d9c170a57c21fcb12a3844cdfcd",
"assets/assets/lottiefiles/trail_loading.json": "402c003d81255c11b459c570d23f590c",
"assets/assets/lottiefiles/StreetByMorning.json": "10f17c016d5ed13d901fb7ffe4a3d411",
"assets/assets/lottiefiles/cooking_app.json": "1eb23d65e40ed1ec3788c243cc294b8d",
"assets/assets/lottiefiles/lottiepreview_qr.json": "4da1872e42706e5e824c89e419e0acbe",
"assets/assets/lottiefiles/touch_id.json": "0755e81a42585060da708c87cfbe9d9b",
"assets/assets/lottiefiles/powerupp_app_onboard%2520(1).json": "03dca05efd80d0c70ad108b6d573c537",
"assets/assets/bluetoothscanning.json": "9dc51300adb74b8f51fc5b5a6df88613",
"assets/assets/weather/fog.json": "bf972f9a17bb3127112010a94b86f8f3",
"assets/assets/weather/windy.json": "00886ffe0e5451877434daf8b6da5c72",
"assets/assets/weather/hurricane.json": "6ed3c61cda9683fb59cc760c80af8732",
"assets/assets/weather/thunder-storm.json": "a2e39d7b9895a71f8c92bcf5630ba125",
"assets/assets/weather/tornado.json": "3e49230b350d76033f160878f4602bd0",
"assets/assets/lf20_w2Afea.json": "0e928d4a64a121301619705ceced31ed",
"assets/assets/sticker.json": "43c1b0ef65d9ee6d8a48cf26906e855b",
"assets/assets/fonts/Helvetica-Neue.ttf": "a035ad376fc36ca17d91308451b8d015",
"assets/assets/fonts/Helvetica.ttf": "87f1fd482576e48df5851967028edd66",
"assets/assets/fonts/Open-Sans.ttf": "d7d5d4588a9f50c99264bc12e4892a7c",
"assets/assets/fonts/Roboto.ttf": "3e1af3ef546b9e6ecef9f3ba197bf7d2",
"assets/assets/fonts/NotoEmoji-Regular.ttf": "77705799ab05db42974183e59c326fe3",
"assets/assets/fonts/Comic-Neue.ttf": "c7823c53863f1386e0154142369242d6",
"assets/assets/fonts/PT-Serif.ttf": "ae585d91ff895849f607a9bfbd439c6f",
"assets/assets/battery_optimizations.json": "4a6c5ce8fa546c8a49591a4bee872689",
"assets/assets/envelope.json": "0d76b3fc5f7238073eeef27522eb547d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
