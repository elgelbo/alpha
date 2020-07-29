module.exports = {
  title: 'English',
  intro:
    "Hello! Your input will help shape the County of San Diego's first-ever Environmental Justice Element. (A part of the General Plan.)\r\nLearn more: https://lmgtfy.com/?q=environmental+justice",
  instructions:
    'INSTRUCTIONS: Please text your response to the following questions.\r\n',
  disclaimer:
    'DISCLAIMER: We respect your privacy.\r\nYour data will only be used to communicate with you about this project and will not be shared or distributed.',
  close: 'Thank you for completing the survey',
  questions: [
    // 0
    {
      text: 'For English, reply with 1.\r\nPara Español, oprima número 2',
      status: 'Open',
      type: 'lang',
    },
    // 1
    {
      text: 'Where do you live?',
      status: 'Open',
      type: 'address',
      location: 'home',
    },
    // 2
    {
      text:
        'Do you think there are adequate public facilities and services in your community?',
      status: 'Open',
      type: 'single',
      options: [
        'Strong Disagree',
        'Disagree',
        'Mixed / Unsure',
        'Agree',
        'Strong Agree',
      ],
    },
    // 3
    {
      text: 'Is there anything else you want to share?',
      status: 'Open',
      type: 'txt',
    },
    // 4
    {
      text:
        'Would you like to receive updates about the County\'s Environmental Justice Element?',
      status: 'Open',
      type: 'boolean',
    },
    // 5
    {
      text: 'What is your email address?',
      status: 'Open',
      type: 'email',
      skips: [
        {
          qNum: 4,
          criteria: [false],
        },
      ],
    },
  ],
};
