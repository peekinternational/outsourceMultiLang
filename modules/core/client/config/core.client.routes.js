  'use strict';

// Setting up route
angular.module('core').config(['$translateProvider','$stateProvider', '$urlRouterProvider',
  function ($translateProvider,$stateProvider, $urlRouterProvider) {
    $translateProvider.translations('en', {
    outsourcingOkLoading: 'OutsourcingOk Loading',
    applicants: 'Applicants',
    bidamount: 'Average support / bid amount',
    login: 'Login',
    client: 'Client',
    signin: 'Sign In',
    signup: 'Sign Up',
    postProject: 'Post Project',
    postAProject: 'Post a Project',
    findFreelancer: 'FIND A FREELANCER',
    startProject: 'Start a Project',
    startContest: 'Start a Contest',
    browseContest: 'Browse Contests',
    browseDirectory: 'Browse a Directory',
    helper: 'Helper',
    findWork: 'FIND WORK',
    browseProject: 'Browse Projects',
    showcase: 'Showcase',
    browseCategories: 'Browse Categories',
    myProject: 'My Projects',
    manage: 'MANAGE',
    dashboard: 'Dashboard',
    inbox: 'Inbox',
    feedback: 'Feedback',
    getSupport: 'Get Support',
    getHelp: 'Get Help',
    howToUse: 'How to use',
    feesAndCharges: 'Fees and Charges',
    SearchOutsourcer: 'Search outsourcer',
    SearchForAllResults: 'Search for all results',
    balance: 'Balance',
    fundManagement: 'Manage',
    deposit: 'Deposit Funds',
    withdraw: 'Withdraw Money',
    financialDashboard: 'Financial Dashboard',
    transcation: 'Transcation History',
    verifyPayment: 'Verify Payment Method',
    messages: 'Messages',
    noMessages: 'No Messages',
    notification: 'Notifications',
    noNotification: 'No Notifications',
    projectFeed: 'Project Feed',
    noProjectFeed : 'No Project Feed',
    project: 'Project',
    contest: 'Contest',
    profile: 'Profile',
    setting: 'Setting',
    logout: 'Logout',
    chatBox: 'My Chat Box',
    // Login
    loginOutSourcing: 'Login to OutSourcingOk',
    userNameRequired: 'Username is required',
    passwordRequired: 'Password is required',
    forgetPassword: 'Forgot your password',
    dontAccount: 'Dont have an account',
    alreadyAccount: 'Already have a account',
    optmizeGoogle: 'Outsourcing OK is optimized for Google Chrome',
    // SignUp
    signupForFreeAccount: 'Sign Up for your FREE account',
    signupOutSourcing: 'Sign Up to OutSourcingOk',
    companyName: 'Company name is required',
    registerNo: 'Registration no is required',
    emailRequired: 'Email address is required',
    emailInvalid: 'Email address is invalid',
    passwrdRequire: 'Password Requirements',
    confirmPass: 'Confirm Password is required',
    passwordNotMatch: 'Your passwords did not match',
    wantTo: 'I want to',
    hire: 'Hire',
    work: 'Work',
    or: 'or',
    firstName: 'First name is required',
    lastName: 'Last name is required',
    // Post Project
    startFreeProject: 'Start free project registration',
    projectType: 'Please select a project type',
    recommendDesign: 'We recommend you post a Stationary Design Contest instead',
    withContest: 'With a contest, hundreds of freelancers submit work for you to review before you award a winner',
    projectTitle: 'Please enter project title',
    titlePro: 'Project title',
    freelancersLocation: 'If you want to be a freelancer in your area, select a region',
    detectLocation: 'Detect My Location',
    projectContent: 'Write your project content',
    projectExpertise: 'Skills required for the project',
    content: 'Describe your project',
    attachFile: 'Attach a file here that might be helpful in explaining your project in brief (2MB)',
    fileName: 'Name',
    fileSize: 'Size',
    fileWarning: 'More than 2MB file cannot be uploaded',
    projectBudget: 'Select project budget',
    projectAmount: 'Choose project amount',
    fixedAmount: 'Fixed Rate',
    hourlyAmount: 'Hourly Rate',
    optional: 'Please select an outsourcing ok service [optional]',
    notice: 'Note: When using outsourcing ok service, you will not be charged cancellation or refund for each registration fee',
    chat: 'Chat',
    chatHeading: 'Using chat is an indicator of the high success of the project. Unlimited chats by registration',
    chatDescription: 'You can use unlimited chat anytime and anywhere until the project is completed.',
    chatFree: '[free] Events until June 30',
    freeEvent: 'Free Event Event [Until June 30]',
    caution: 'Caution ▶',
    image: 'Image(video)',
    freePurchase: '[Free to purchase chat]',
    videDescription: 'If you use free video (video) service, you need to purchase chat service to go to separate screen and use 1: 1 live video chat.',
    confirmed: 'Confirmed from freelancers to the end of the project safely!',
    introduction: 'Introduction ▶',
    yen: 'yen',
    private: 'Private',
    privateServices: 'Private services are effective when looking for professional freelancers to develop core projects that require security',
    sealed: 'Seal',
    sealedDescription: 'If you do not register your project, the freelancers you support will not be able to see the amount and content of other freelancers',
    NDA: '(NDA)',
    NDAdescription: 'A confidentiality agreement is a contract between a client and a freelancer to maintain the confidential information required to perform the project work.',
    NdaDetails: 'If you choose a confidentiality contract service, your project may be highlighted as highlighted. It is also an unconventional confidentiality between the client and the freelancer for the project under given terms.',
    urgent: 'Urgent',
    urgentDescription: 'This service is a service that allows freelancers to quickly process your project, including quick response of your project, urgent project, error (bug), change, updates',
    total: 'Total (VAT excluded)',
    endDetail: 'Freelancers who apply for the project may be subject to sanctions if they direct e-mails by posting e-mails, wire / wireless numbers, etc.',
    postProjectFree: 'Its free to post a project',
    projectFreeRegister: 'Project Free Easy Registration',
    conciseNameofYourProject: 'Clear and concise name of your Project',
    DetailDescriptionofYourProject: 'Detail description of your Project',
    ProvideImagesorPDFWithSpecificationOfYourProject: 'Provide images or PDF with specification of your Project',
    FeelFreetoPostTheProject: 'Feel free to Post the Project',
    TheProjectRegistrationOrderIs: 'The project registration order is',
    HowTheProjectWorks: 'How the project works',
    ReferencesAndNotes: 'References and Notes',
    ReferToTheExampleInOrder: 'Refer to the example in order',
    DetailedBusinessContents: 'Detailed business contents',
    CurrentStatusOftTheProject: 'Current status of the project',
    HowToWriteProjectContents: 'How to write project contents',
    ExampleProjectContent: 'Example Project Content',
    seeExample: 'See example',
    ContestWithoutRealTimePublicForumisPast: 'Contest without real time public forum is past.',
    SimultaneousInterviewsWithApplicants: 'Simultaneous interviews with applicants in real-time public forums and 1: 1 video chat!',
    SetAcontestPrizeAndOpenArealTimePublicForum: 'Set a contest prize and open a real-time public forum',
    applicantsSelectedByTheClient: 'In OutsourcingOk real-time video chat with clients chosen by the applicants through public forums to get the best results',
    selectedFreelancerAndClientCanSaveTime: 'The selected freelancer and client can save time, money, and results more than expected with real-time 1: 2 video chatting.',
    securityAndSecurityReasonsVideoChatMustUseGoogleChrome: 'For security and security reasons, video chat must use Google Chrome. Use of Internet Explorer (IE) may be restricted.',
    // Browse category
    BrowsebyCategory: 'Browse by Category',
    // Project List
    projectList: 'Project List',
    LookingForProjects: 'Looking for Projects',
    mySkills: 'My Skills',
    bids: 'Bids',
    started: 'Started',
    budget: 'Budget',
    AvailableInterview: 'Available Interview',
    Guaranteed: 'Guaranteed',
    postProjectLikeThis: 'Post a project like this',
    hourly: 'hourly',
    bidNow: 'Bid Now',
    YourProject: 'MY Project',
    projectCompleted: 'Completed',
    gaurantee: 'Gaurantee',
    featured: 'Featured',
    // Dashboard
    MyDashboard: 'My Dashboard',
    WebsiteInformationSoftware: 'Web siteㆍInformationㆍSoftware',
    MobilephoneComputing: 'Mobile phoneㆍComputing',
    DesignMediaArchitecture: 'DesignㆍMediaㆍArchitecture',
    WritingContents: 'WritingㆍContents',
    EngineeringScience: 'Engineering & Science',
    BusinessAccountingPersonnelLaw: 'BusinessㆍAccountingㆍPersonnelㆍLaw',
    DatainputManagement: 'Data input / Management',
    ProductSourcingManufacturing: 'Product SourcingㆍManufacturing',
    TranslationLanguage: 'Translation / Language',
    newsFeed: 'News Feeds',
    LookingForaProfessionalFreelanceInAnyField: 'Looking for a professional freelancer in any field?',
    YouCanMeetanIncredibleProfessionalFreelancer: 'You can meet an incredible professional freelancer in all areas now.',
    ThereIsNoNewstoShow: 'There is no news feed to show.',
    SaveTimeAndMoneyWithOnlineliveVideoChat: 'Save time and money with online live video chat.',
    welcomeBack: 'Welcome Back',
    viewProfile: 'View profile',
    SetupYourAccount: 'Setup Your Account',
    verifyEmailAddress: 'Verify email address',
    verifyLocation: 'Verify your location',
    verifyMobileNumber: 'Verify your mobile number',
    download: 'Download',
    choromeExtensionParagraph: 'It works as a live video chat using a Google Chrome browser for the best communication among members. Currently, when using video chat in Internet Explorer (IE), it is not possible to use video chat, but you can use chat but it is a bit inconvenient. We strongly recommend you to use Google Chrome to protect your valuable property. If you download Google Chrome from IE (Internet Explorer), you can click on the chrome icon on your desktop to use the live video chat.',
    bidsLeft: 'Bids Left',
    GetmoreBids: 'Get more bids',
  });
  $translateProvider.translations('kr', {
    outsourcingOkLoading: '아웃소싱 오케이 로딩중',
    applicants: '지원자수',
    bidamount: '평균 지원/입찰 금액',
    login : '로그인',
    signup: '회원가입',
    signin: '로그인',
    postProject: '프로젝트등록',
    client : '의뢰인 전용',
    findFreelancer : '의뢰인 전용 카테고리',
    startProject: '프로젝트 무료등록',
    startContest: '콘테스트 무료등록',
    browseContest: '콘테스트 검색',
    browseDirectory: '글로벌 프리랜서 회원검색',
    helper: '프리랜서 전용',
    findWork: '프리랜서 전용 카테고리',
    browseProject: '프로젝트 검색',
    showcase: '쇼케이스 몰',
    browseCategories: '분야별 프로젝트 검색',
    myProject: 'MY 프로젝트',
    manage: 'MY 프로젝트 전용 카테고리',
    dashboard: 'MY 대시보드',
    inbox: 'MY 화상채팅 인박스',
    feedback: 'MY 프로젝트 작업 평가',
    getSupport: '고객지원',
    getHelp: '고객지원 전용 카테고리',
    howToUse: '사용 방법',
    feesAndCharges: '이용 및 수수료',
    SearchOutsourcer: '',
    SearchForAllResults: '현재 검색된 지원자들 입니다',
    balance: '에스크로 자금현황',
    fundManagement: '에스크로 자금관리',
    deposit: '서비스 이용료 결재',
    withdraw: '회원잔액 이체',
    financialDashboard: '회원자금 현황',
    transcation: '자금 내역',
    verifyPayment: '페이팔계좌 인증',
    messages: '메세지 알림',
    noMessages: '메세지가 없습니다',
    notification: '프로젝트 진행상황 알림',
    noNotification: '현재 지원자가 없습니다',
    projectFeed: '신규 프로젝트 알림',
    noProjectFeed: '신규 프로젝트가 없습니다',
    project: '프로젝트 무료등록',
    contest: '콘테스트 무료등록',
    profile: '프로필',
    setting: '설정',
    logout: '로그 아웃',
    chatBox: 'MY 채팅 인박스',
    // Login
    loginOutSourcing: '아웃소싱 오케이에 오신것을 환영 합니다',
    userNameRequired: '사용자 아이디를 입력바랍니다',
    passwordRequired: '비밀번호를 입력바랍니다',
    forgetPassword: '비밀번호를 잊으셨나요',
    dontAccount: '무료 회원 가입을 원하신가요',
    alreadyAccount: '회원에 이미 가입하셨나요',
    optmizeGoogle: '아웃소싱오케이는 구글크롬에 최적화되어 있습니다',
    // Signup
    signupForFreeAccount: '회원가입은 무료입니다',
    signupOutSourcing: '아웃소싱 오케이 무료 회원가입',
    companyName: '회사 상호명을 입력바랍니다',
    registerNo: '사업자 등록번호를 입력바랍니다',
    emailRequired: '이메일 주소를 입력바랍니다',
    emailInvalid: '이메일 주소가 유효하지 않습니다',
    passwrdRequire: '비밀번호를 입력 바랍니다',
    confirmPass: '비밀번호 재입력 확인 바랍니다',
    passwordNotMatch: '비밀번호가 잘못 입력 됐습니다',
    wantTo: '프로젝트 이용목적을 선택바랍니다',
    hire: '의뢰인',
    work: '프리랜서',
    or: '또는',
    firstName: '본인 성을 입력 바랍니다',
    lastName: '이름을 입력 바랍니다',
    // Post Project
    startFreeProject: '로젝트 무료등록 시작',
    projectType: '프로젝트 유형을 선택 하십시오',
    recommendDesign: '의뢰인의 프로젝트는 무료 콘테스트 등록으로 추천 드립니다',
    withContest: '콘테스트를 통해서 수백 명의 지원자/프리랜서가 제출한 제안서를 의뢰인께서 직접 검토 한 후에 지원자/프리랜서를 선정 하시면 됩니다. 프로젝트를 원할경우 무시하고 1번분터 4번까지 필수 등록항목을 작성하시면',
    projectTitle: '프로젝트 제목을 입력 하십시오',
    titlePro: '프로젝트 제목',
    freelancersLocation: '근처지역에서 프리랜서의 지원을 원할경우 지역을 선택 하십시오',
    detectLocation: '지역검색',
    projectContent: '프로젝트 내용을 작성 하십시오',
    projectExpertise: '프로젝트에 요구되는 전문기술',
    content: '프로젝트 내용',
    attachFile: '첨부파일 2MB 이하 [파일선택후 업로드확인]',
    fileName: '파일이름',
    fileSize: '파일크기',
    fileWarning: '파일이 성공적으로 업로드 되었어도 첨부한 파일이 2MB 이상일 경우 등록이 불가능합니다',
    projectBudget: '프로젝트 지출 예산을 선택 하십시오',
    projectAmount: '프로젝트 금액 선택',
    fixedAmount: '고정 금액',
    hourlyAmount: '시간제 금액',
    optional: '아웃소싱오케이 서비스를 선택하십시오 [선택사항]',
    notice: '안내:아웃소싱 오케이 서비스 이용시 등록 건별로 이용료[부가세 별도]가 부과되며 취소 및 환불을 할 수 없습니다',
    chat: '채팅',
    chatHeading: '채팅이용은 프로젝트의 높은 성공의 지표입니다. 등록건별 무제한 채팅이용!',
    chatDescription: '등록건별로 프로젝트가 완성될때까지 언제 어디서나 무제한 채팅이용할 수 있으며, 단 프로젝트 등록이 다를경우 별도 구매 하셔야합니다',
    chatFree: '[무료] 이벤트 행사 6월30일까지 무료',
    freeEvent: '무료 이벤트 행사 [6월30일까지]',
    caution: '주의▶',
    image: '화상(비디오)',
    freePurchase: '[채팅구매시 무료]',
    videDescription: '무료 화상(비디오)서비스이용할 경우 채팅서비스를 구매해야 별도의 화면으로 이동해서 1:1 실시간 화상채팅 이용이 가능합니다',
    confirmed: '프리랜서들로부터 프로젝트 종료까지 안전하게 확인!',
    introduction: '안내▶',
    yen: '원',
    private: '개인 서비스',
    privateServices: '개인 서비스는 보안성이 필요한 핵심적인 프로젝트 개발에 전문 프리랜서를 찾을 때 효과적입니다',
    sealed: '비공개',
    sealedDescription: '프로젝트 등록을 비공개로 할 경우 지원한 프리랜서들은 다른 프리랜서의 지원금액과 내용을 볼 수 없어 기대이상의 효과를 볼 수 있습니다.',
    NDA: '비밀유지 계약(NDA)',
    NDAdescription: '비밀유지 계약은 프로젝트 업무수행을 위해 필요한 비밀정보를 유지하기위해서 의뢰인과 프리랜서가 계약을 체결하는것입니다',
    NdaDetails: '비밀유지 계약 서비스를 선택할 경우 하이라이트로 표시되어 프로젝트가 부각될 수 있습니다. 또한 주어진 조건에 따라 프로젝트에 대한 의뢰인과 프리랜서간에 비밀유지 걔약입니다',
    urgent: '긴급',
    urgentDescription: '본 서비스 기능은 프리랜서들에게 회원님의 프로젝트 빠른 응답과 긴급을 요한 프로젝트, 오류(버그), 변경, 업데이트등 프로젝트를 신속하게 처리할 수 있는 서비스입니다',
    total: '합계(부가세 별도)',
    endDetail: '프로젝트에 지원하는 프리랜서는 이메일, 유무선번호 등을 게시하여 직거래를 유도할 경우, 서비스 이용에 제재를 받을 수 있습니다',
    postProjectFree: '모든 유형의 프로젝트를 무료등록이 가능합니다',
    projectFreeRegister: '프로젝트 무료 간편 등록',
    conciseNameofYourProject: '명확하고 간결한 프로젝트 제목으로 작성',
    DetailDescriptionofYourProject: '프로젝트에 대한 상세내용 작성',
    ProvideImagesorPDFWithSpecificationOfYourProject: '프로젝트에 요구되는 전문기술과 이미지ㆍ파일첨부',
    FeelFreetoPostTheProject: '프로젝트는 의뢰인이 원하는 아이디어로 간결하게 작성',
    TheProjectRegistrationOrderIs: '프로젝트 등록순서는',
    HowTheProjectWorks: '프로젝트 진행방식',
    ReferencesAndNotes: '참고자료ㆍ유의사항',
    ReferToTheExampleInOrder: '순서대로 예시를 참조해서 작성',
    DetailedBusinessContents: '상세한 업무내용',
    CurrentStatusOftTheProject: '프로젝트의 현재상황',
    HowToWriteProjectContents: '프로젝트 내용 작성요령',
    ExampleProjectContent: '프로젝트 내용 예시',
    seeExample: '예시보기',
    ContestWithoutRealTimePublicForumisPast: '실시간 공개포럼없는 콘테스트는 과거의 일 입니다',
    SimultaneousInterviewsWithApplicants: ' 실시간 공개포럼과 1:1 화상 채팅으로 지원자와 동시 인터뷰!',
    SetAcontestPrizeAndOpenArealTimePublicForum: '콘테스트 상금을 설정하고 실시간 공개 포럼을 ',
    applicantsSelectedByTheClient: '공개 포럼을 통해 의뢰인이 선택한 지원자들과 아웃소싱 오케이 실시간 화상채팅을 통해서 최상의 결과를 얻을 수 있습니다',
    selectedFreelancerAndClientCanSaveTime: '선택된 프리랜서와 의뢰인은 1:1로 장소에 구애 없이 실시간 화상인터뷰로 기대이상의 결과와 시간 및 경비를 절감 할 수 있습니다',
    securityAndSecurityReasonsVideoChatMustUseGoogleChrome: '보안과 안전성을 이유로 화상채팅은 반드시 구글크롬을 이용해야 합니다. IE(인터넷 익스플로러)이용시 사용이 제한될 수 있습니다.',
    // Browse Category
    BrowsebyCategory: '분야별 프로젝트 검색',
    // Project List
    projectList: '프로젝트 리스트',
    LookingForProjects: '프로젝트 검색',
    mySkills: 'MY 전문기술',
    bids: '지원',
    started: '등록일',
    budget: '예산규모',
    AvailableInterview: '지원여부',
    Guaranteed: '지출예산규모',
    postProjectLikeThis: '유사 프로젝트등록',
    hourly: '시간제',
    bidNow: '프로젝트 지원',
    YourProject: 'MY 프로젝트',
    projectCompleted: '프로젝트 종료',
    gaurantee: '상금보장',
    featured: '채팅',
    // Dashboard
    MyDashboard: 'MY 대시보드',
    WebsiteInformationSoftware: '웹사이트ㆍ정보ㆍ소프트웨어',
    MobilephoneComputing: '휴대전화ㆍ컴퓨팅',
    DesignMediaArchitecture: '디자인ㆍ미디어ㆍ건축',
    WritingContents: '작문ㆍ콘텐츠',
    EngineeringScience: '공학ㆍ과학',
    BusinessAccountingPersonnelLaw: '비즈니스ㆍ회계ㆍ인사ㆍ법률',
    DatainputManagement: '데이터 입력ㆍ관리',
    ProductSourcingManufacturing: '제품소싱ㆍ제조',
    TranslationLanguage: '번역ㆍ언어',
    newsFeed: '프로젝트 진행 소식',
    LookingForaProfessionalFreelanceInAnyField: '어떤 분야의 전문 프리랜서를 찾고 계시나요?',
    YouCanMeetanIncredibleProfessionalFreelancer: '회원님께서 믿을 수 없을 많큼 모든 분야의 전문 프리랜서를 지금 만날 수 있습니다.',
    ThereIsNoNewstoShow: '현재 회원님의 진행 소식이 없습니다.',
    SaveTimeAndMoneyWithOnlineliveVideoChat: '오프라인 상담은 과거의 일 입니다. 온라인 실시간 화상채팅으로 시간과 비용을 절감 할 수있습니다.',
    welcomeBack: 'MY 대시보드',
    viewProfile: '프로필 보기',
    SetupYourAccount: '확인된 회원님의 현재 정보',
    verifyEmailAddress: '이메일 주소 확인',
    verifyLocation: '현재 근무지역 확인',
    verifyMobileNumber: '본인 휴대폰 번호 확인',
    download: '다운로드',
    choromeExtensionParagraph: '회원님간에 원할한 소통을 위해서 구글 크롬 브라우저를 이용한 실시간 화상 채팅으로 운영됩니다. 현재 IE(인터넷 익스프로러)에서 화상채팅을 이용할 경우 화상 이용은 불가능하며 채팅은 사용 할 수 있으나 다소 불편을 감수 해야 합니다. 회원님의 소중한 재산을 보호하기위해서 구글 크롬 사용을 적극 권장 합니다, 회원님께서 IE(인터넷 익스플로러)에서 구글 크롬을 다운로드 하신경우 바탕화면에 크롬아이콘을 클릭하고 사용하셔야 실시간 화상 채팅이 가능 합니다.',
    bidsLeft: '지원가능횟수',
    GetmoreBids: '지원 횟수 추가요청',
  });
 /* $translateProvider.useStaticFilesLoader({
    prefix: 'public/lib/lang/local-',
    suffix: '.json'
  });*/
  $translateProvider.preferredLanguage('kr');
    // Redirect to 404 when route not found
    // $urlRouterProvider.otherwise(function ($injector, $location) {
    //   $injector.get('$state').transitionTo('not-found', null, {
    //     location: false
    //   });
    // });

    // Home state routing
    $stateProvider
    .state('home', {
      url: '/',
      // templateUrl: 'modules/core/client/views/home.client.view.html'
      templateUrl: 'modules/core/client/views/landingPage.client.view.html'
    })
    .state('not-found', {
      url: '/not-found',
      templateUrl: 'modules/core/client/views/404.client.view.html',
      data: {
        ignoreState: true
      }
    })

    .state('verify', {
      url: '/verify',
      templateUrl: 'modules/core/client/views/verify.client.view.html',
      data: {
        ignoreState: true
      }
    })  

    // after login redirect here
    // .state('profile.view', {
    //   url: '/view',
    //   templateUrl: 'modules/profiles/client/views/view-profile.client.view.html',
    //   data: {
    //     roles: ['individual', 'company']
    //   }
    // })

    
    .state('bad-request', {
      url: '/bad-request',
      templateUrl: 'modules/core/client/views/400.client.view.html',
      data: {
        ignoreState: true
      }
    })
    .state('forbidden', {
      url: '/forbidden',
      templateUrl: 'modules/core/client/views/403.client.view.html',
      data: {
        ignoreState: true
      }
    })

    // lates routes start
    .state('about', {
      abstract: true,
        url: '/about',
        template: '<ui-view/>', 
      autoscroll: true
    })

    // 
    .state('about.outsource', {
      url: '/outsource',
      templateUrl: 'modules/core/client/views/footer/outsourcingok.client.view.html', 
      autoscroll: true
    })

    .state('about.overview', {
      url: '/overview',
      templateUrl: 'modules/core/client/views/footer/overview.client.view.html'
    })

    .state('about.team', {
      url: '/team',
      templateUrl: 'modules/core/client/views/footer/team.client.view.html',
      data: {
        roles: ['individual', 'company']
      }
    })

    .state('about.security', {
      url: '/security',
      templateUrl: 'modules/core/client/views/footer/security.client.view.html',
      data: {
        roles: ['individual', 'company']
      }
    })

    .state('about.feesandcharges', {
      url: '/feesandcharges',
      templateUrl: 'modules/core/client/views/footer/feesandcharges.client.view.html', 
      autoscroll: true
    })

    .state('about.quotes', {
      url: '/quotes',
      templateUrl: 'modules/core/client/views/footer/quotes.client.view.html',
      data: {
        roles: ['individual', 'company']
      }
    })
    
    .state('testimonial', {
      url: '/testimonial',
      templateUrl: 'modules/core/client/views/footer/testimonial.client.view.html'
    })  

    .state('about.sitemap', {
      url: '/sitemap',
      templateUrl: 'modules/core/client/views/footer/sitemap.client.view.html',
      data: {
        roles: ['individual', 'company']
      }
    })

    .state('about.services', {
      url: '/services',
      templateUrl: 'modules/core/client/views/footer/services.client.view.html'
    })

    .state('awards', {
      url: '/awards',
      templateUrl: 'modules/core/client/views/footer/awards.client.view.html'
    })
    .state('codeofconduct', {
      url: '/codeofconduct',
      templateUrl: 'modules/core/client/views/footer/codeofconduct.client.view.html'
    })
    .state('copyright-policy', {
      url: '/copyright-policy',
      templateUrl: 'modules/core/client/views/footer/copyright-policy.client.view.html'
    })
    .state('privacy-policy', {
      url: '/privacy-policy',
      templateUrl: 'modules/core/client/views/footer/privacy-policy.client.view.html'
    })
    .state('support-career', {
      url: '/support-career',
      templateUrl: 'modules/core/client/views/footer/support-career.client.view.html'
    })
    .state('about.media', {
      url: '/media',
      templateUrl: 'modules/core/client/views/footer/media.client.view.html',
      data: {
        roles: ['individual', 'company']
      }
    })

   .state('about.press', {
     url: '/press',
     templateUrl: 'modules/core/client/views/footer/press.client.view.html'
   })

   .state('about.contact', {
     url: '/contact',
     templateUrl: 'modules/core/client/views/footer/contact.client.view.html'
   })

  .state('term-condition', {
    url: '/term-condition',
    templateUrl: 'modules/core/client/views/footer/term-condition.client.view.html'
  })
   .state('Privacy-term-condition', {
    url: '/Privacy-term-condition',
    templateUrl: 'modules/core/client/views/footer/Privacy-term-condition.client.view.html'
  })

  .state('advertisement', {
    url: '/advertisement',
    templateUrl: 'modules/core/client/views/footer/advertisement.client.view.html'
   })

  // Get support pages routes
  .state('support', {
    url: '/support',
    templateUrl: 'modules/core/client/views/footer/get-support.client.view.html'
  })

  .state('support-general', {
    url: '/support-general',
    templateUrl: 'modules/core/client/views/support/general-support.client.view.html'
  })

  .state('support-project', {
    url: '/support-project',
    templateUrl: 'modules/core/client/views/support/project-support.client.view.html'
   })

  .state('support-contest', {
    url: '/support-contest',
    templateUrl: 'modules/core/client/views/support/contest-support.client.view.html'
   })

  .state('support-payment', {
    url: '/support-payment',
    templateUrl: 'modules/core/client/views/support/payment-support.client.view.html'
   })

  .state('support-membership', {
    url: '/support-membership',
    templateUrl: 'modules/core/client/views/support/membership-support.client.view.html'
   })
  
  .state('support-profile', {
    url: '/support-profile',
    templateUrl: 'modules/core/client/views/support/profile-support.client.view.html'
   });
  
  }
]);
