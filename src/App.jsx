import React, { useMemo, useState } from "react";

export default function App() {
  /* =========================================================
     LANGUAGE SYSTEM
  ========================================================= */

  const languages = [
    { code: "en", name: "English", native: "English" },
    { code: "hi", name: "Hindi", native: "हिन्दी" },
    { code: "ta", name: "Tamil", native: "தமிழ்" },
    { code: "te", name: "Telugu", native: "తెలుగు" },
    { code: "mr", name: "Marathi", native: "मराठी" },
    { code: "bn", name: "Bengali", native: "বাংলা" },
    { code: "gu", name: "Gujarati", native: "ગુજરાતી" },
    { code: "kn", name: "Kannada", native: "ಕನ್ನಡ" },
    { code: "ml", name: "Malayalam", native: "മലയാളം" },
    { code: "pa", name: "Punjabi", native: "ਪੰਜਾਬੀ" },
    { code: "or", name: "Odia", native: "ଓଡ଼ିଆ" },
    { code: "as", name: "Assamese", native: "অসমীয়া" },
    { code: "ur", name: "Urdu", native: "اردو" },
    { code: "sa", name: "Sanskrit", native: "संस्कृतम्" },
  ];

  const [language, setLanguage] = useState("en");

  /*
    Centralized interface translations.
    The selected language controls the complete application UI.
  */

  const T = {
    en: {
      welcome: "Welcome to SchemeSaathi 2.0",
      tagline: "Find government schemes made relevant to you",
      intro:
        "Tell us a few basic details and select what kind of support you need.",
      find: "Find My Scheme",
      details: "Personal Details",
      tell: "Tell us about yourself",
      basic:
        "We only use basic information to find potentially relevant schemes.",
      name: "Name",
      optional: "Optional",
      state: "State",
      selectState: "Select your state",
      age: "Age",
      gender: "Gender",
      male: "Male",
      female: "Female",
      other: "Other",
      occupation: "Occupation",
      occupationPlaceholder: "Example: Farmer, Student, Employee",
      income: "Monthly Income",
      selectIncome: "Select income range",
      family: "Family Size",
      selectFamily: "Select family size",
      member: "member",
      members: "members",
      continue: "Continue",
      back: "Back",
      whatNeed: "What do you need?",
      chooseField:
        "Choose a department or field to discover relevant government schemes.",
      dashboard: "Scheme Dashboard",
      schemesScreened: "Schemes Screened",
      applicable: "Applicable",
      possible: "Possibly Applicable",
      notApplicable: "Not Applicable",
      all: "All Schemes",
      search: "Search schemes...",
      noSchemes: "No schemes found",
      tryAgain: "Try another filter or department.",
      changeDepartment: "Change Department",
      viewAnalysis: "View Complete Analysis",
      benefit: "Scheme Benefit",
      explanation: "Eligibility Explanation",
      yourInfo: "Your information",
      criteria: "Scheme criteria",
      result: "Result",
      gap: "Benefit Gap Detector",
      gapText:
        "SchemeSaathi identifies potentially relevant benefits that you may want to explore.",
      selectedDepartment: "Selected department",
      relevantScheme: "Relevant scheme identified",
      guideAvailable: "Application guidance available",
      optimizer: "Benefit Optimizer",
      optimizerText:
        "Schemes are ranked according to relevance, expected impact and priority.",
      priority: "Priority Score",
      recommendation: "Recommendation",
      high: "high",
      moderate: "moderate",
      familyGraph: "Family Benefit Graph",
      familyText:
        "Explore how different family members can have different potential benefit opportunities.",
      family: "Family",
      you: "You",
      scheme: "Scheme",
      application: "Application Guide",
      information: "Information / documents",
      official: "Visit Official Government Website",
      notice:
        "SchemeSaathi provides preliminary screening. Final eligibility is determined by the concerned government authority.",
      noDocuments:
        "SchemeSaathi does not collect, upload or store certificates or personal documents. This section only provides application guidance.",
      assistant: "SchemeSaathi Assistant",
      assistantIntro:
        "Hello! I can help you understand schemes, eligibility, benefits and application procedures.",
      ask: "Ask your question...",
      send: "Send",
      clear: "Clear",
      close: "Close",
      quickQuestions: "Quick questions",
      whyNot: "Why am I not applicable?",
      howApply: "How do I apply?",
      benefitQuestion: "What benefit will I get?",
      whichFirst: "Which scheme should I apply for first?",
      thinking: "Thinking...",
      chatbotError:
        "Sorry, I could not process that question. Please try again.",
      language: "Language",
      welcomeStep: "Welcome",
      departmentStep: "Choose Department",
      schemeDetails: "Scheme Details",
      invalid: "Please select State, Age and Gender.",
    },

    hi: {
      welcome: "SchemeSaathi 2.0 में आपका स्वागत है",
      tagline: "अपने लिए उपयुक्त सरकारी योजनाएँ खोजें",
      intro:
        "कुछ बुनियादी जानकारी दें और अपनी आवश्यकता का क्षेत्र चुनें।",
      find: "मेरी योजना खोजें",
      details: "व्यक्तिगत जानकारी",
      tell: "अपने बारे में बताएं",
      basic: "हम केवल प्रासंगिक योजनाएँ खोजने के लिए बुनियादी जानकारी का उपयोग करते हैं।",
      name: "नाम",
      optional: "वैकल्पिक",
      state: "राज्य",
      selectState: "अपना राज्य चुनें",
      age: "आयु",
      gender: "लिंग",
      male: "पुरुष",
      female: "महिला",
      other: "अन्य",
      occupation: "व्यवसाय",
      occupationPlaceholder: "उदाहरण: किसान, छात्र, कर्मचारी",
      income: "मासिक आय",
      selectIncome: "आय सीमा चुनें",
      family: "परिवार का आकार",
      selectFamily: "परिवार का आकार चुनें",
      member: "सदस्य",
      members: "सदस्य",
      continue: "जारी रखें",
      back: "वापस",
      whatNeed: "आपको क्या चाहिए?",
      chooseField: "सरकारी योजनाएँ खोजने के लिए विभाग या क्षेत्र चुनें।",
      dashboard: "योजना डैशबोर्ड",
      schemesScreened: "जाँची गई योजनाएँ",
      applicable: "लागू",
      possible: "संभावित रूप से लागू",
      notApplicable: "लागू नहीं",
      all: "सभी योजनाएँ",
      search: "योजनाएँ खोजें...",
      noSchemes: "कोई योजना नहीं मिली",
      tryAgain: "कोई अन्य फ़िल्टर या विभाग चुनें।",
      changeDepartment: "विभाग बदलें",
      viewAnalysis: "पूरा विश्लेषण देखें",
      benefit: "योजना का लाभ",
      explanation: "पात्रता की जानकारी",
      yourInfo: "आपकी जानकारी",
      criteria: "योजना की शर्तें",
      result: "परिणाम",
      gap: "लाभ अंतर पहचानकर्ता",
      gapText: "SchemeSaathi आपके लिए संभावित रूप से प्रासंगिक लाभों की पहचान करता है।",
      selectedDepartment: "चयनित विभाग",
      relevantScheme: "प्रासंगिक योजना मिली",
      guideAvailable: "आवेदन मार्गदर्शन उपलब्ध",
      optimizer: "लाभ अनुकूलक",
      optimizerText: "योजनाओं को प्रासंगिकता, प्रभाव और प्राथमिकता के आधार पर रैंक किया जाता है।",
      priority: "प्राथमिकता स्कोर",
      recommendation: "सिफारिश",
      high: "उच्च",
      moderate: "मध्यम",
      familyGraph: "परिवार लाभ ग्राफ",
      familyText: "परिवार के अलग-अलग सदस्यों के लिए संभावित लाभ देखें।",
      family: "परिवार",
      you: "आप",
      scheme: "योजना",
      application: "आवेदन मार्गदर्शिका",
      information: "जानकारी / दस्तावेज़",
      official: "आधिकारिक सरकारी वेबसाइट",
      notice: "SchemeSaathi प्रारंभिक स्क्रीनिंग प्रदान करता है। अंतिम पात्रता संबंधित सरकारी प्राधिकरण द्वारा निर्धारित की जाती है।",
      noDocuments: "SchemeSaathi प्रमाणपत्र या व्यक्तिगत दस्तावेज़ एकत्र, अपलोड या संग्रहीत नहीं करता।",
      assistant: "SchemeSaathi सहायक",
      assistantIntro: "नमस्ते! मैं योजनाओं, पात्रता, लाभ और आवेदन प्रक्रिया को समझने में आपकी सहायता कर सकता हूँ।",
      ask: "अपना प्रश्न पूछें...",
      send: "भेजें",
      clear: "साफ़ करें",
      close: "बंद करें",
      quickQuestions: "त्वरित प्रश्न",
      whyNot: "मैं पात्र क्यों नहीं हूँ?",
      howApply: "आवेदन कैसे करें?",
      benefitQuestion: "मुझे क्या लाभ मिलेगा?",
      whichFirst: "मुझे पहले कौन सी योजना के लिए आवेदन करना चाहिए?",
      thinking: "सोच रहा हूँ...",
      chatbotError: "क्षमा करें, मैं इस प्रश्न को संसाधित नहीं कर सका। कृपया फिर प्रयास करें।",
      language: "भाषा",
      welcomeStep: "स्वागत",
      departmentStep: "विभाग चुनें",
      schemeDetails: "योजना विवरण",
      invalid: "कृपया राज्य, आयु और लिंग चुनें।",
    },

    ta: {
      welcome: "SchemeSaathi 2.0-க்கு வரவேற்கிறோம்",
      tagline: "உங்களுக்கு பொருத்தமான அரசு திட்டங்களை கண்டறியுங்கள்",
      intro: "சில அடிப்படை தகவல்களை வழங்கி உங்களுக்கு தேவையான துறையைத் தேர்ந்தெடுக்கவும்.",
      find: "என் திட்டத்தை கண்டறி",
      details: "தனிப்பட்ட தகவல்கள்",
      tell: "உங்களைப் பற்றி சொல்லுங்கள்",
      basic: "பொருத்தமான திட்டங்களை கண்டறிய அடிப்படை தகவல்கள் மட்டுமே பயன்படுத்தப்படும்.",
      name: "பெயர்",
      optional: "விருப்பத்தேர்வு",
      state: "மாநிலம்",
      selectState: "உங்கள் மாநிலத்தைத் தேர்ந்தெடுக்கவும்",
      age: "வயது",
      gender: "பாலினம்",
      male: "ஆண்",
      female: "பெண்",
      other: "மற்றவை",
      occupation: "தொழில்",
      occupationPlaceholder: "உதாரணம்: விவசாயி, மாணவர், ஊழியர்",
      income: "மாத வருமானம்",
      selectIncome: "வருமான வரம்பைத் தேர்ந்தெடுக்கவும்",
      family: "குடும்ப உறுப்பினர்கள்",
      selectFamily: "குடும்ப அளவைத் தேர்ந்தெடுக்கவும்",
      member: "உறுப்பினர்",
      members: "உறுப்பினர்கள்",
      continue: "தொடரவும்",
      back: "பின்செல்",
      whatNeed: "உங்களுக்கு என்ன தேவை?",
      chooseField: "அரசுத் திட்டங்களை கண்டறிய ஒரு துறை அல்லது தளத்தைத் தேர்ந்தெடுக்கவும்.",
      dashboard: "திட்ட டாஷ்போர்டு",
      schemesScreened: "சோதிக்கப்பட்ட திட்டங்கள்",
      applicable: "பொருந்தும்",
      possible: "பொருந்தக்கூடியது",
      notApplicable: "பொருந்தாது",
      all: "அனைத்து திட்டங்கள்",
      search: "திட்டங்களைத் தேடுங்கள்...",
      noSchemes: "திட்டங்கள் எதுவும் இல்லை",
      tryAgain: "வேறு வடிகட்டி அல்லது துறையைத் தேர்ந்தெடுக்கவும்.",
      changeDepartment: "துறையை மாற்றவும்",
      viewAnalysis: "முழு பகுப்பாய்வைப் பார்க்கவும்",
      benefit: "திட்டத்தின் நன்மை",
      explanation: "தகுதி விளக்கம்",
      yourInfo: "உங்கள் தகவல்",
      criteria: "திட்ட நிபந்தனைகள்",
      result: "முடிவு",
      gap: "நன்மை இடைவெளி கண்டறிதல்",
      gapText: "உங்களுக்கு பொருத்தமானதாக இருக்கக்கூடிய நன்மைகளை SchemeSaathi கண்டறியும்.",
      selectedDepartment: "தேர்ந்தெடுக்கப்பட்ட துறை",
      relevantScheme: "பொருத்தமான திட்டம் கண்டறியப்பட்டது",
      guideAvailable: "விண்ணப்ப வழிகாட்டி உள்ளது",
      optimizer: "நன்மை முன்னுரிமைப்படுத்தல்",
      optimizerText: "பொருத்தம், தாக்கம் மற்றும் முன்னுரிமையின் அடிப்படையில் திட்டங்கள் வரிசைப்படுத்தப்படுகின்றன.",
      priority: "முன்னுரிமை மதிப்பெண்",
      recommendation: "பரிந்துரை",
      high: "உயர்",
      moderate: "மிதமான",
      familyGraph: "குடும்ப நன்மை வரைபடம்",
      familyText: "குடும்ப உறுப்பினர்களுக்கான சாத்தியமான நன்மைகளைப் பாருங்கள்.",
      family: "குடும்பம்",
      you: "நீங்கள்",
      scheme: "திட்டம்",
      application: "விண்ணப்ப வழிகாட்டி",
      information: "தகவல் / ஆவணங்கள்",
      official: "அதிகாரப்பூர்வ அரசு இணையதளம்",
      notice: "SchemeSaathi ஆரம்ப நிலை தகுதி சோதனையை வழங்குகிறது. இறுதி தகுதி சம்பந்தப்பட்ட அரசு அதிகாரியால் தீர்மானிக்கப்படும்.",
      noDocuments: "SchemeSaathi சான்றிதழ்கள் அல்லது தனிப்பட்ட ஆவணங்களை சேகரிக்கவோ பதிவேற்றவோ சேமிக்கவோ செய்யாது.",
      assistant: "SchemeSaathi உதவியாளர்",
      assistantIntro: "வணக்கம்! திட்டங்கள், தகுதி, நன்மைகள் மற்றும் விண்ணப்ப நடைமுறை குறித்து நான் உதவ முடியும்.",
      ask: "உங்கள் கேள்வியை கேளுங்கள்...",
      send: "அனுப்பு",
      clear: "அழி",
      close: "மூடு",
      quickQuestions: "விரைவு கேள்விகள்",
      whyNot: "நான் ஏன் தகுதியற்றவன்?",
      howApply: "எப்படி விண்ணப்பிப்பது?",
      benefitQuestion: "எனக்கு என்ன நன்மை கிடைக்கும்?",
      whichFirst: "எந்த திட்டத்திற்கு முதலில் விண்ணப்பிக்க வேண்டும்?",
      thinking: "சிந்திக்கிறது...",
      chatbotError: "மன்னிக்கவும், கேள்வியை செயல்படுத்த முடியவில்லை. மீண்டும் முயற்சிக்கவும்.",
      language: "மொழி",
      welcomeStep: "வரவேற்பு",
      departmentStep: "துறையைத் தேர்ந்தெடுக்கவும்",
      schemeDetails: "திட்ட விவரங்கள்",
      invalid: "மாநிலம், வயது மற்றும் பாலினத்தைத் தேர்ந்தெடுக்கவும்.",
    },

    te: {
      welcome: "SchemeSaathi 2.0కి స్వాగతం",
      tagline: "మీకు అనుకూలమైన ప్రభుత్వ పథకాలను కనుగొనండి",
      intro: "కొన్ని ప్రాథమిక వివరాలను అందించి మీకు అవసరమైన విభాగాన్ని ఎంచుకోండి.",
      find: "నా పథకాన్ని కనుగొనండి",
      details: "వ్యక్తిగత వివరాలు",
      tell: "మీ గురించి చెప్పండి",
      basic: "సంబంధిత పథకాలను కనుగొనడానికి ప్రాథమిక సమాచారాన్ని మాత్రమే ఉపయోగిస్తాము.",
      name: "పేరు",
      optional: "ఐచ్ఛికం",
      state: "రాష్ట్రం",
      selectState: "మీ రాష్ట్రాన్ని ఎంచుకోండి",
      age: "వయస్సు",
      gender: "లింగం",
      male: "పురుషుడు",
      female: "స్త్రీ",
      other: "ఇతర",
      occupation: "వృత్తి",
      occupationPlaceholder: "ఉదాహరణ: రైతు, విద్యార్థి, ఉద్యోగి",
      income: "నెలవారీ ఆదాయం",
      selectIncome: "ఆదాయ పరిధిని ఎంచుకోండి",
      family: "కుటుంబ పరిమాణం",
      selectFamily: "కుటుంబ పరిమాణాన్ని ఎంచుకోండి",
      member: "సభ్యుడు",
      members: "సభ్యులు",
      continue: "కొనసాగించండి",
      back: "వెనుకకు",
      whatNeed: "మీకు ఏమి కావాలి?",
      chooseField: "ప్రభుత్వ పథకాలను కనుగొనడానికి విభాగాన్ని ఎంచుకోండి.",
      dashboard: "పథక డాష్‌బోర్డ్",
      schemesScreened: "పరిశీలించిన పథకాలు",
      applicable: "వర్తిస్తుంది",
      possible: "వర్తించే అవకాశం ఉంది",
      notApplicable: "వర్తించదు",
      all: "అన్ని పథకాలు",
      search: "పథకాలను వెతకండి...",
      noSchemes: "పథకాలు కనుగొనబడలేదు",
      tryAgain: "మరొక ఫిల్టర్ లేదా విభాగాన్ని ప్రయత్నించండి.",
      changeDepartment: "విభాగాన్ని మార్చండి",
      viewAnalysis: "పూర్తి విశ్లేషణ చూడండి",
      benefit: "పథక ప్రయోజనం",
      explanation: "అర్హత వివరణ",
      yourInfo: "మీ సమాచారం",
      criteria: "పథక ప్రమాణాలు",
      result: "ఫలితం",
      gap: "ప్రయోజన లోటు గుర్తింపు",
      gapText: "మీకు సంబంధితంగా ఉండే ప్రయోజనాలను SchemeSaathi గుర్తిస్తుంది.",
      selectedDepartment: "ఎంచుకున్న విభాగం",
      relevantScheme: "సంబంధిత పథకం కనుగొనబడింది",
      guideAvailable: "దరఖాస్తు మార్గదర్శకం అందుబాటులో ఉంది",
      optimizer: "ప్రయోజన ప్రాధాన్యత",
      optimizerText: "సంబంధితత, ప్రభావం మరియు ప్రాధాన్యత ఆధారంగా పథకాలు ర్యాంక్ చేయబడతాయి.",
      priority: "ప్రాధాన్యత స్కోర్",
      recommendation: "సిఫార్సు",
      high: "అధిక",
      moderate: "మధ్యస్థ",
      familyGraph: "కుటుంబ ప్రయోజన గ్రాఫ్",
      familyText: "కుటుంబ సభ్యులకు లభించే అవకాశాలను చూడండి.",
      family: "కుటుంబం",
      you: "మీరు",
      scheme: "పథకం",
      application: "దరఖాస్తు మార్గదర్శకం",
      information: "సమాచారం / పత్రాలు",
      official: "అధికారిక ప్రభుత్వ వెబ్‌సైట్",
      notice: "SchemeSaathi ప్రాథమిక స్క్రీనింగ్ మాత్రమే అందిస్తుంది. తుది అర్హత సంబంధిత ప్రభుత్వ అధికారిచే నిర్ణయించబడుతుంది.",
      noDocuments: "SchemeSaathi సర్టిఫికెట్లు లేదా వ్యక్తిగత పత్రాలను సేకరించదు, అప్‌లోడ్ చేయదు లేదా నిల్వ చేయదు.",
      assistant: "SchemeSaathi సహాయకుడు",
      assistantIntro: "నమస్కారం! పథకాలు, అర్హత, ప్రయోజనాలు మరియు దరఖాస్తు విధానం గురించి నేను సహాయం చేయగలను.",
      ask: "మీ ప్రశ్న అడగండి...",
      send: "పంపండి",
      clear: "క్లియర్",
      close: "మూసివేయండి",
      quickQuestions: "త్వరిత ప్రశ్నలు",
      whyNot: "నేను ఎందుకు అర్హుడు కాదు?",
      howApply: "ఎలా దరఖాస్తు చేయాలి?",
      benefitQuestion: "నాకు ఏ ప్రయోజనం లభిస్తుంది?",
      whichFirst: "ముందుగా ఏ పథకానికి దరఖాస్తు చేయాలి?",
      thinking: "ఆలోచిస్తోంది...",
      chatbotError: "క్షమించండి, ప్రశ్నను ప్రాసెస్ చేయలేకపోయాను. మళ్లీ ప్రయత్నించండి.",
      language: "భాష",
      welcomeStep: "స్వాగతం",
      departmentStep: "విభాగాన్ని ఎంచుకోండి",
      schemeDetails: "పథక వివరాలు",
      invalid: "దయచేసి రాష్ట్రం, వయస్సు మరియు లింగాన్ని ఎంచుకోండి.",
    },

    mr: {
      welcome: "SchemeSaathi 2.0 मध्ये आपले स्वागत आहे",
      tagline: "आपल्यासाठी योग्य सरकारी योजना शोधा",
      intro: "काही मूलभूत माहिती द्या आणि आपल्याला आवश्यक असलेले क्षेत्र निवडा.",
      find: "माझी योजना शोधा",
      details: "वैयक्तिक माहिती",
      tell: "आपल्याबद्दल सांगा",
      basic: "योग्य योजना शोधण्यासाठी आम्ही फक्त मूलभूत माहिती वापरतो.",
      name: "नाव",
      optional: "पर्यायी",
      state: "राज्य",
      selectState: "आपले राज्य निवडा",
      age: "वय",
      gender: "लिंग",
      male: "पुरुष",
      female: "स्त्री",
      other: "इतर",
      occupation: "व्यवसाय",
      occupationPlaceholder: "उदा.: शेतकरी, विद्यार्थी, कर्मचारी",
      income: "मासिक उत्पन्न",
      selectIncome: "उत्पन्न श्रेणी निवडा",
      family: "कुटुंबाचा आकार",
      selectFamily: "कुटुंबाचा आकार निवडा",
      member: "सदस्य",
      members: "सदस्य",
      continue: "पुढे जा",
      back: "मागे",
      whatNeed: "आपल्याला काय हवे आहे?",
      chooseField: "सरकारी योजना शोधण्यासाठी विभाग किंवा क्षेत्र निवडा.",
      dashboard: "योजना डॅशबोर्ड",
      schemesScreened: "तपासलेल्या योजना",
      applicable: "लागू",
      possible: "संभाव्यतः लागू",
      notApplicable: "लागू नाही",
      all: "सर्व योजना",
      search: "योजना शोधा...",
      noSchemes: "कोणतीही योजना सापडली नाही",
      tryAgain: "दुसरा फिल्टर किंवा विभाग वापरा.",
      changeDepartment: "विभाग बदला",
      viewAnalysis: "संपूर्ण विश्लेषण पहा",
      benefit: "योजनेचा लाभ",
      explanation: "पात्रता स्पष्टीकरण",
      yourInfo: "आपली माहिती",
      criteria: "योजनेचे निकष",
      result: "निकाल",
      gap: "लाभ अंतर शोधक",
      gapText: "आपल्यासाठी संभाव्य संबंधित लाभ SchemeSaathi ओळखते.",
      selectedDepartment: "निवडलेला विभाग",
      relevantScheme: "संबंधित योजना सापडली",
      guideAvailable: "अर्ज मार्गदर्शन उपलब्ध",
      optimizer: "लाभ प्राधान्यक्रम",
      optimizerText: "संबंधितता, प्रभाव आणि प्राधान्याच्या आधारावर योजना क्रमवारीत लावल्या जातात.",
      priority: "प्राधान्य गुण",
      recommendation: "शिफारस",
      high: "उच्च",
      moderate: "मध्यम",
      familyGraph: "कुटुंब लाभ ग्राफ",
      familyText: "कुटुंबातील सदस्यांसाठी संभाव्य लाभ पहा.",
      family: "कुटुंब",
      you: "आपण",
      scheme: "योजना",
      application: "अर्ज मार्गदर्शक",
      information: "माहिती / कागदपत्रे",
      official: "अधिकृत सरकारी वेबसाइट",
      notice: "SchemeSaathi प्राथमिक तपासणी देते. अंतिम पात्रता संबंधित सरकारी प्राधिकरण ठरवते.",
      noDocuments: "SchemeSaathi प्रमाणपत्रे किंवा वैयक्तिक कागदपत्रे गोळा, अपलोड किंवा साठवत नाही.",
      assistant: "SchemeSaathi सहाय्यक",
      assistantIntro: "नमस्कार! मी योजना, पात्रता, लाभ आणि अर्ज प्रक्रियेबद्दल मदत करू शकतो.",
      ask: "आपला प्रश्न विचारा...",
      send: "पाठवा",
      clear: "साफ करा",
      close: "बंद करा",
      quickQuestions: "जलद प्रश्न",
      whyNot: "मी पात्र का नाही?",
      howApply: "अर्ज कसा करायचा?",
      benefitQuestion: "मला कोणता लाभ मिळेल?",
      whichFirst: "मी प्रथम कोणत्या योजनेसाठी अर्ज करावा?",
      thinking: "विचार करत आहे...",
      chatbotError: "क्षमस्व, प्रश्नावर प्रक्रिया करता आली नाही. पुन्हा प्रयत्न करा.",
      language: "भाषा",
      welcomeStep: "स्वागत",
      departmentStep: "विभाग निवडा",
      schemeDetails: "योजना तपशील",
      invalid: "कृपया राज्य, वय आणि लिंग निवडा.",
    },

    bn: {
      welcome: "SchemeSaathi 2.0-এ স্বাগতম",
      tagline: "আপনার জন্য উপযুক্ত সরকারি প্রকল্প খুঁজুন",
      intro: "কিছু মৌলিক তথ্য দিন এবং আপনার প্রয়োজনীয় ক্ষেত্র নির্বাচন করুন।",
      find: "আমার প্রকল্প খুঁজুন",
      details: "ব্যক্তিগত তথ্য",
      tell: "আপনার সম্পর্কে বলুন",
      basic: "প্রাসঙ্গিক প্রকল্প খুঁজতে আমরা শুধুমাত্র মৌলিক তথ্য ব্যবহার করি।",
      name: "নাম",
      optional: "ঐচ্ছিক",
      state: "রাজ্য",
      selectState: "আপনার রাজ্য নির্বাচন করুন",
      age: "বয়স",
      gender: "লিঙ্গ",
      male: "পুরুষ",
      female: "মহিলা",
      other: "অন্যান্য",
      occupation: "পেশা",
      occupationPlaceholder: "উদাহরণ: কৃষক, ছাত্র, কর্মচারী",
      income: "মাসিক আয়",
      selectIncome: "আয়ের পরিসর নির্বাচন করুন",
      family: "পরিবারের আকার",
      selectFamily: "পরিবারের আকার নির্বাচন করুন",
      member: "সদস্য",
      members: "সদস্য",
      continue: "চালিয়ে যান",
      back: "পিছনে",
      whatNeed: "আপনার কী প্রয়োজন?",
      chooseField: "সরকারি প্রকল্প খুঁজতে একটি বিভাগ বা ক্ষেত্র নির্বাচন করুন।",
      dashboard: "প্রকল্প ড্যাশবোর্ড",
      schemesScreened: "পরীক্ষিত প্রকল্প",
      applicable: "প্রযোজ্য",
      possible: "সম্ভবত প্রযোজ্য",
      notApplicable: "প্রযোজ্য নয়",
      all: "সব প্রকল্প",
      search: "প্রকল্প খুঁজুন...",
      noSchemes: "কোনও প্রকল্প পাওয়া যায়নি",
      tryAgain: "অন্য ফিল্টার বা বিভাগ চেষ্টা করুন।",
      changeDepartment: "বিভাগ পরিবর্তন করুন",
      viewAnalysis: "সম্পূর্ণ বিশ্লেষণ দেখুন",
      benefit: "প্রকল্পের সুবিধা",
      explanation: "যোগ্যতার ব্যাখ্যা",
      yourInfo: "আপনার তথ্য",
      criteria: "প্রকল্পের মানদণ্ড",
      result: "ফলাফল",
      gap: "সুবিধার ঘাটতি শনাক্তকরণ",
      gapText: "SchemeSaathi আপনার জন্য সম্ভাব্য প্রাসঙ্গিক সুবিধা শনাক্ত করে।",
      selectedDepartment: "নির্বাচিত বিভাগ",
      relevantScheme: "প্রাসঙ্গিক প্রকল্প পাওয়া গেছে",
      guideAvailable: "আবেদন নির্দেশিকা উপলব্ধ",
      optimizer: "সুবিধা অগ্রাধিকার",
      optimizerText: "প্রাসঙ্গিকতা, প্রভাব এবং অগ্রাধিকারের ভিত্তিতে প্রকল্প সাজানো হয়।",
      priority: "অগ্রাধিকার স্কোর",
      recommendation: "সুপারিশ",
      high: "উচ্চ",
      moderate: "মাঝারি",
      familyGraph: "পরিবার সুবিধা গ্রাফ",
      familyText: "পরিবারের সদস্যদের সম্ভাব্য সুবিধা দেখুন।",
      family: "পরিবার",
      you: "আপনি",
      scheme: "প্রকল্প",
      application: "আবেদন নির্দেশিকা",
      information: "তথ্য / নথি",
      official: "অফিসিয়াল সরকারি ওয়েবসাইট",
      notice: "SchemeSaathi প্রাথমিক স্ক্রিনিং প্রদান করে। চূড়ান্ত যোগ্যতা সংশ্লিষ্ট সরকারি কর্তৃপক্ষ নির্ধারণ করে।",
      noDocuments: "SchemeSaathi সার্টিফিকেট বা ব্যক্তিগত নথি সংগ্রহ, আপলোড বা সংরক্ষণ করে না।",
      assistant: "SchemeSaathi সহায়ক",
      assistantIntro: "নমস্কার! আমি প্রকল্প, যোগ্যতা, সুবিধা এবং আবেদন প্রক্রিয়া সম্পর্কে সাহায্য করতে পারি।",
      ask: "আপনার প্রশ্ন করুন...",
      send: "পাঠান",
      clear: "পরিষ্কার",
      close: "বন্ধ করুন",
      quickQuestions: "দ্রুত প্রশ্ন",
      whyNot: "আমি কেন যোগ্য নই?",
      howApply: "কীভাবে আবেদন করব?",
      benefitQuestion: "আমি কী সুবিধা পাব?",
      whichFirst: "প্রথমে কোন প্রকল্পে আবেদন করা উচিত?",
      thinking: "ভাবছি...",
      chatbotError: "দুঃখিত, প্রশ্নটি প্রক্রিয়া করা যায়নি। আবার চেষ্টা করুন।",
      language: "ভাষা",
      welcomeStep: "স্বাগতম",
      departmentStep: "বিভাগ নির্বাচন করুন",
      schemeDetails: "প্রকল্পের বিবরণ",
      invalid: "অনুগ্রহ করে রাজ্য, বয়স এবং লিঙ্গ নির্বাচন করুন।",
    },

    gu: {
      welcome: "SchemeSaathi 2.0 માં આપનું સ્વાગત છે",
      tagline: "તમારા માટે યોગ્ય સરકારી યોજનાઓ શોધો",
      intro: "થોડી મૂળભૂત માહિતી આપો અને તમને જરૂરી ક્ષેત્ર પસંદ કરો.",
      find: "મારી યોજના શોધો",
      details: "વ્યક્તિગત માહિતી",
      tell: "તમારા વિશે જણાવો",
      basic: "યોગ્ય યોજનાઓ શોધવા માટે અમે માત્ર મૂળભૂત માહિતીનો ઉપયોગ કરીએ છીએ.",
      name: "નામ",
      optional: "વૈકલ્પિક",
      state: "રાજ્ય",
      selectState: "તમારું રાજ્ય પસંદ કરો",
      age: "ઉંમર",
      gender: "લિંગ",
      male: "પુરુષ",
      female: "સ્ત્રી",
      other: "અન્ય",
      occupation: "વ્યવસાય",
      occupationPlaceholder: "ઉદાહરણ: ખેડૂત, વિદ્યાર્થી, કર્મચારી",
      income: "માસિક આવક",
      selectIncome: "આવક શ્રેણી પસંદ કરો",
      family: "પરિવારનું કદ",
      selectFamily: "પરિવારનું કદ પસંદ કરો",
      member: "સભ્ય",
      members: "સભ્યો",
      continue: "આગળ વધો",
      back: "પાછળ",
      whatNeed: "તમને શું જોઈએ છે?",
      chooseField: "સરકારી યોજનાઓ શોધવા માટે વિભાગ પસંદ કરો.",
      dashboard: "યોજના ડેશબોર્ડ",
      schemesScreened: "ચકાસેલી યોજનાઓ",
      applicable: "લાગુ",
      possible: "શક્યતઃ લાગુ",
      notApplicable: "લાગુ નથી",
      all: "બધી યોજનાઓ",
      search: "યોજનાઓ શોધો...",
      noSchemes: "કોઈ યોજના મળી નથી",
      tryAgain: "બીજું ફિલ્ટર અથવા વિભાગ અજમાવો.",
      changeDepartment: "વિભાગ બદલો",
      viewAnalysis: "સંપૂર્ણ વિશ્લેષણ જુઓ",
      benefit: "યોજનાનો લાભ",
      explanation: "પાત્રતા સમજણ",
      yourInfo: "તમારી માહિતી",
      criteria: "યોજનાના માપદંડ",
      result: "પરિણામ",
      gap: "લાભ અંતર શોધક",
      gapText: "SchemeSaathi તમારા માટે સંબંધિત હોઈ શકે તેવા લાભો ઓળખે છે.",
      selectedDepartment: "પસંદ કરેલ વિભાગ",
      relevantScheme: "સંબંધિત યોજના મળી",
      guideAvailable: "અરજી માર્ગદર્શન ઉપલબ્ધ",
      optimizer: "લાભ પ્રાથમિકતા",
      optimizerText: "સંબંધિતતા, અસર અને પ્રાથમિકતા અનુસાર યોજનાઓ ક્રમબદ્ધ થાય છે.",
      priority: "પ્રાથમિકતા સ્કોર",
      recommendation: "ભલામણ",
      high: "ઉચ્ચ",
      moderate: "મધ્યમ",
      familyGraph: "કુટુંબ લાભ ગ્રાફ",
      familyText: "કુટુંબના સભ્યો માટે ઉપલબ્ધ સંભવિત લાભો જુઓ.",
      family: "કુટુંબ",
      you: "તમે",
      scheme: "યોજના",
      application: "અરજી માર્ગદર્શિકા",
      information: "માહિતી / દસ્તાવેજો",
      official: "સત્તાવાર સરકારી વેબસાઇટ",
      notice: "SchemeSaathi પ્રાથમિક સ્ક્રીનિંગ આપે છે. અંતિમ પાત્રતા સંબંધિત સરકારી સત્તા નક્કી કરે છે.",
      noDocuments: "SchemeSaathi પ્રમાણપત્રો અથવા વ્યક્તિગત દસ્તાવેજો એકત્રિત, અપલોડ અથવા સંગ્રહિત કરતું નથી.",
      assistant: "SchemeSaathi સહાયક",
      assistantIntro: "નમસ્તે! હું યોજનાઓ, પાત્રતા, લાભ અને અરજી પ્રક્રિયા સમજવામાં મદદ કરી શકું છું.",
      ask: "તમારો પ્રશ્ન પૂછો...",
      send: "મોકલો",
      clear: "સાફ કરો",
      close: "બંધ કરો",
      quickQuestions: "ઝડપી પ્રશ્નો",
      whyNot: "હું શા માટે પાત્ર નથી?",
      howApply: "અરજી કેવી રીતે કરવી?",
      benefitQuestion: "મને શું લાભ મળશે?",
      whichFirst: "પહેલા કઈ યોજના માટે અરજી કરવી?",
      thinking: "વિચાર કરી રહ્યું છે...",
      chatbotError: "માફ કરશો, પ્રશ્નની પ્રક્રિયા થઈ શકી નથી. ફરી પ્રયાસ કરો.",
      language: "ભાષા",
      welcomeStep: "સ્વાગત",
      departmentStep: "વિભાગ પસંદ કરો",
      schemeDetails: "યોજના વિગતો",
      invalid: "કૃપા કરીને રાજ્ય, ઉંમર અને લિંગ પસંદ કરો.",
    },

    kn: {
      welcome: "SchemeSaathi 2.0 ಗೆ ಸ್ವಾಗತ",
      tagline: "ನಿಮಗೆ ಸೂಕ್ತವಾದ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ",
      intro: "ಕೆಲವು ಮೂಲಭೂತ ಮಾಹಿತಿಯನ್ನು ನೀಡಿ ಮತ್ತು ನಿಮಗೆ ಬೇಕಾದ ಕ್ಷೇತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
      find: "ನನ್ನ ಯೋಜನೆಯನ್ನು ಹುಡುಕಿ",
      details: "ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ",
      tell: "ನಿಮ್ಮ ಬಗ್ಗೆ ತಿಳಿಸಿ",
      basic: "ಸಂಬಂಧಿತ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಲು ನಾವು ಮೂಲಭೂತ ಮಾಹಿತಿಯನ್ನು ಮಾತ್ರ ಬಳಸುತ್ತೇವೆ.",
      name: "ಹೆಸರು",
      optional: "ಐಚ್ಛಿಕ",
      state: "ರಾಜ್ಯ",
      selectState: "ನಿಮ್ಮ ರಾಜ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      age: "ವಯಸ್ಸು",
      gender: "ಲಿಂಗ",
      male: "ಪುರುಷ",
      female: "ಮಹಿಳೆ",
      other: "ಇತರೆ",
      occupation: "ಉದ್ಯೋಗ",
      occupationPlaceholder: "ಉದಾಹರಣೆ: ರೈತ, ವಿದ್ಯಾರ್ಥಿ, ಉದ್ಯೋಗಿ",
      income: "ಮಾಸಿಕ ಆದಾಯ",
      selectIncome: "ಆದಾಯ ಶ್ರೇಣಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      family: "ಕುಟುಂಬದ ಗಾತ್ರ",
      selectFamily: "ಕುಟುಂಬದ ಗಾತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      member: "ಸದಸ್ಯ",
      members: "ಸದಸ್ಯರು",
      continue: "ಮುಂದುವರಿಸಿ",
      back: "ಹಿಂದೆ",
      whatNeed: "ನಿಮಗೆ ಏನು ಬೇಕು?",
      chooseField: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಲು ಇಲಾಖೆ ಅಥವಾ ಕ್ಷೇತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
      dashboard: "ಯೋಜನೆ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      schemesScreened: "ಪರಿಶೀಲಿಸಿದ ಯೋಜನೆಗಳು",
      applicable: "ಅನ್ವಯಿಸುತ್ತದೆ",
      possible: "ಅನ್ವಯಿಸುವ ಸಾಧ್ಯತೆ",
      notApplicable: "ಅನ್ವಯಿಸುವುದಿಲ್ಲ",
      all: "ಎಲ್ಲಾ ಯೋಜನೆಗಳು",
      search: "ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ...",
      noSchemes: "ಯಾವುದೇ ಯೋಜನೆ ಕಂಡುಬಂದಿಲ್ಲ",
      tryAgain: "ಬೇರೆ ಫಿಲ್ಟರ್ ಅಥವಾ ಇಲಾಖೆಯನ್ನು ಪ್ರಯತ್ನಿಸಿ.",
      changeDepartment: "ಇಲಾಖೆ ಬದಲಾಯಿಸಿ",
      viewAnalysis: "ಸಂಪೂರ್ಣ ವಿಶ್ಲೇಷಣೆ ನೋಡಿ",
      benefit: "ಯೋಜನೆಯ ಪ್ರಯೋಜನ",
      explanation: "ಅರ್ಹತಾ ವಿವರಣೆ",
      yourInfo: "ನಿಮ್ಮ ಮಾಹಿತಿ",
      criteria: "ಯೋಜನೆಯ ಮಾನದಂಡಗಳು",
      result: "ಫಲಿತಾಂಶ",
      gap: "ಪ್ರಯೋಜನ ಅಂತರ ಪತ್ತೆ",
      gapText: "ನಿಮಗೆ ಸಂಬಂಧಿಸಿದ ಪ್ರಯೋಜನಗಳನ್ನು SchemeSaathi ಗುರುತಿಸುತ್ತದೆ.",
      selectedDepartment: "ಆಯ್ಕೆ ಮಾಡಿದ ಇಲಾಖೆ",
      relevantScheme: "ಸಂಬಂಧಿತ ಯೋಜನೆ ಕಂಡುಬಂದಿದೆ",
      guideAvailable: "ಅರ್ಜಿ ಮಾರ್ಗದರ್ಶನ ಲಭ್ಯ",
      optimizer: "ಪ್ರಯೋಜನ ಆದ್ಯತೆ",
      optimizerText: "ಸಂಬಂಧಿತತೆ, ಪರಿಣಾಮ ಮತ್ತು ಆದ್ಯತೆಯ ಆಧಾರದ ಮೇಲೆ ಯೋಜನೆಗಳನ್ನು ಶ್ರೇಣೀಕರಿಸಲಾಗುತ್ತದೆ.",
      priority: "ಆದ್ಯತಾ ಸ್ಕೋರ್",
      recommendation: "ಶಿಫಾರಸು",
      high: "ಹೆಚ್ಚು",
      moderate: "ಮಧ್ಯಮ",
      familyGraph: "ಕುಟುಂಬ ಪ್ರಯೋಜನ ಗ್ರಾಫ್",
      familyText: "ಕುಟುಂಬ ಸದಸ್ಯರಿಗೆ ಲಭ್ಯವಿರುವ ಸಾಧ್ಯತೆಯ ಪ್ರಯೋಜನಗಳನ್ನು ನೋಡಿ.",
      family: "ಕುಟುಂಬ",
      you: "ನೀವು",
      scheme: "ಯೋಜನೆ",
      application: "ಅರ್ಜಿ ಮಾರ್ಗದರ್ಶಿ",
      information: "ಮಾಹಿತಿ / ದಾಖಲೆಗಳು",
      official: "ಅಧಿಕೃತ ಸರ್ಕಾರಿ ವೆಬ್‌ಸೈಟ್",
      notice: "SchemeSaathi ಪ್ರಾಥಮಿಕ ಪರಿಶೀಲನೆ ನೀಡುತ್ತದೆ. ಅಂತಿಮ ಅರ್ಹತೆಯನ್ನು ಸಂಬಂಧಿತ ಸರ್ಕಾರಿ ಅಧಿಕಾರಿಗಳು ನಿರ್ಧರಿಸುತ್ತಾರೆ.",
      noDocuments: "SchemeSaathi ಪ್ರಮಾಣಪತ್ರಗಳು ಅಥವಾ ವೈಯಕ್ತಿಕ ದಾಖಲೆಗಳನ್ನು ಸಂಗ್ರಹಿಸುವುದಿಲ್ಲ, ಅಪ್‌ಲೋಡ್ ಮಾಡುವುದಿಲ್ಲ ಅಥವಾ ಉಳಿಸುವುದಿಲ್ಲ.",
      assistant: "SchemeSaathi ಸಹಾಯಕ",
      assistantIntro: "ನಮಸ್ಕಾರ! ಯೋಜನೆಗಳು, ಅರ್ಹತೆ, ಪ್ರಯೋಜನಗಳು ಮತ್ತು ಅರ್ಜಿ ಪ್ರಕ್ರಿಯೆ ಬಗ್ಗೆ ನಾನು ಸಹಾಯ ಮಾಡಬಹುದು.",
      ask: "ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ...",
      send: "ಕಳುಹಿಸಿ",
      clear: "ಅಳಿಸಿ",
      close: "ಮುಚ್ಚಿ",
      quickQuestions: "ತ್ವರಿತ ಪ್ರಶ್ನೆಗಳು",
      whyNot: "ನಾನು ಏಕೆ ಅರ್ಹನಲ್ಲ?",
      howApply: "ಹೇಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಬೇಕು?",
      benefitQuestion: "ನನಗೆ ಯಾವ ಪ್ರಯೋಜನ ಸಿಗುತ್ತದೆ?",
      whichFirst: "ಮೊದಲು ಯಾವ ಯೋಜನೆಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಬೇಕು?",
      thinking: "ಯೋಚಿಸುತ್ತಿದೆ...",
      chatbotError: "ಕ್ಷಮಿಸಿ, ಪ್ರಶ್ನೆಯನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗಲಿಲ್ಲ. ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
      language: "ಭಾಷೆ",
      welcomeStep: "ಸ್ವಾಗತ",
      departmentStep: "ಇಲಾಖೆ ಆಯ್ಕೆಮಾಡಿ",
      schemeDetails: "ಯೋಜನೆಯ ವಿವರಗಳು",
      invalid: "ದಯವಿಟ್ಟು ರಾಜ್ಯ, ವಯಸ್ಸು ಮತ್ತು ಲಿಂಗ ಆಯ್ಕೆಮಾಡಿ.",
    },

    ml: {
      welcome: "SchemeSaathi 2.0-ലേക്ക് സ്വാഗതം",
      tagline: "നിങ്ങൾക്ക് അനുയോജ്യമായ സർക്കാർ പദ്ധതികൾ കണ്ടെത്തുക",
      intro: "അടിസ്ഥാന വിവരങ്ങൾ നൽകുകയും ആവശ്യമായ മേഖല തിരഞ്ഞെടുക്കുകയും ചെയ്യുക.",
      find: "എന്റെ പദ്ധതി കണ്ടെത്തുക",
      details: "വ്യക്തിഗത വിവരങ്ങൾ",
      tell: "നിങ്ങളെക്കുറിച്ച് പറയുക",
      basic: "അനുയോജ്യമായ പദ്ധതികൾ കണ്ടെത്താൻ അടിസ്ഥാന വിവരങ്ങൾ മാത്രമാണ് ഉപയോഗിക്കുന്നത്.",
      name: "പേര്",
      optional: "ഓപ്ഷണൽ",
      state: "സംസ്ഥാനം",
      selectState: "നിങ്ങളുടെ സംസ്ഥാനം തിരഞ്ഞെടുക്കുക",
      age: "പ്രായം",
      gender: "ലിംഗം",
      male: "പുരുഷൻ",
      female: "സ്ത്രീ",
      other: "മറ്റുള്ളവ",
      occupation: "തൊഴിൽ",
      occupationPlaceholder: "ഉദാഹരണം: കർഷകൻ, വിദ്യാർത്ഥി, ജീവനക്കാരൻ",
      income: "പ്രതിമാസ വരുമാനം",
      selectIncome: "വരുമാന പരിധി തിരഞ്ഞെടുക്കുക",
      family: "കുടുംബ വലുപ്പം",
      selectFamily: "കുടുംബ വലുപ്പം തിരഞ്ഞെടുക്കുക",
      member: "അംഗം",
      members: "അംഗങ്ങൾ",
      continue: "തുടരുക",
      back: "പിന്നിലേക്ക്",
      whatNeed: "നിങ്ങൾക്ക് എന്താണ് ആവശ്യം?",
      chooseField: "സർക്കാർ പദ്ധതികൾ കണ്ടെത്താൻ ഒരു വിഭാഗം തിരഞ്ഞെടുക്കുക.",
      dashboard: "പദ്ധതി ഡാഷ്ബോർഡ്",
      schemesScreened: "പരിശോധിച്ച പദ്ധതികൾ",
      applicable: "ബാധകം",
      possible: "ബാധകമായേക്കാം",
      notApplicable: "ബാധകമല്ല",
      all: "എല്ലാ പദ്ധതികളും",
      search: "പദ്ധതികൾ തിരയുക...",
      noSchemes: "പദ്ധതികളൊന്നും കണ്ടെത്തിയില്ല",
      tryAgain: "മറ്റൊരു ഫിൽട്ടർ അല്ലെങ്കിൽ വിഭാഗം തിരഞ്ഞെടുക്കുക.",
      changeDepartment: "വിഭാഗം മാറ്റുക",
      viewAnalysis: "പൂർണ്ണ വിശകലനം കാണുക",
      benefit: "പദ്ധതിയുടെ പ്രയോജനം",
      explanation: "യോഗ്യതാ വിശദീകരണം",
      yourInfo: "നിങ്ങളുടെ വിവരങ്ങൾ",
      criteria: "പദ്ധതി മാനദണ്ഡങ്ങൾ",
      result: "ഫലം",
      gap: "പ്രയോജന വിടവ് കണ്ടെത്തൽ",
      gapText: "നിങ്ങൾക്ക് അനുയോജ്യമായേക്കാവുന്ന പ്രയോജനങ്ങൾ SchemeSaathi കണ്ടെത്തുന്നു.",
      selectedDepartment: "തിരഞ്ഞെടുത്ത വിഭാഗം",
      relevantScheme: "പ്രസക്തമായ പദ്ധതി കണ്ടെത്തി",
      guideAvailable: "അപേക്ഷാ മാർഗ്ഗനിർദ്ദേശം ലഭ്യമാണ്",
      optimizer: "പ്രയോജന മുൻഗണന",
      optimizerText: "പ്രസക്തി, സ്വാധീനം, മുൻഗണന എന്നിവയുടെ അടിസ്ഥാനത്തിൽ പദ്ധതികൾ റാങ്ക് ചെയ്യുന്നു.",
      priority: "മുൻഗണന സ്കോർ",
      recommendation: "ശുപാർശ",
      high: "ഉയർന്ന",
      moderate: "മിതമായ",
      familyGraph: "കുടുംബ പ്രയോജന ഗ്രാഫ്",
      familyText: "കുടുംബാംഗങ്ങൾക്ക് ലഭ്യമായേക്കാവുന്ന പ്രയോജനങ്ങൾ കാണുക.",
      family: "കുടുംബം",
      you: "നിങ്ങൾ",
      scheme: "പദ്ധതി",
      application: "അപേക്ഷാ മാർഗ്ഗനിർദ്ദേശം",
      information: "വിവരം / രേഖകൾ",
      official: "ഔദ്യോഗിക സർക്കാർ വെബ്സൈറ്റ്",
      notice: "SchemeSaathi പ്രാഥമിക പരിശോധന നൽകുന്നു. അന്തിമ യോഗ്യത ബന്ധപ്പെട്ട സർക്കാർ അധികാരിയാണ് തീരുമാനിക്കുന്നത്.",
      noDocuments: "SchemeSaathi സർട്ടിഫിക്കറ്റുകളോ വ്യക്തിഗത രേഖകളോ ശേഖരിക്കുകയോ അപ്‌ലോഡ് ചെയ്യുകയോ സൂക്ഷിക്കുകയോ ചെയ്യുന്നില്ല.",
      assistant: "SchemeSaathi സഹായി",
      assistantIntro: "നമസ്കാരം! പദ്ധതികൾ, യോഗ്യത, ആനുകൂല്യങ്ങൾ, അപേക്ഷാ നടപടികൾ എന്നിവയെക്കുറിച്ച് സഹായിക്കാം.",
      ask: "നിങ്ങളുടെ ചോദ്യം ചോദിക്കുക...",
      send: "അയയ്ക്കുക",
      clear: "മായ്ക്കുക",
      close: "അടയ്ക്കുക",
      quickQuestions: "ദ്രുത ചോദ്യങ്ങൾ",
      whyNot: "ഞാൻ എന്തുകൊണ്ട് യോഗ്യനല്ല?",
      howApply: "എങ്ങനെ അപേക്ഷിക്കാം?",
      benefitQuestion: "എനിക്ക് എന്ത് പ്രയോജനം ലഭിക്കും?",
      whichFirst: "ആദ്യം ഏത് പദ്ധതിക്ക് അപേക്ഷിക്കണം?",
      thinking: "ചിന്തിക്കുന്നു...",
      chatbotError: "ക്ഷമിക്കണം, ചോദ്യം പ്രോസസ്സ് ചെയ്യാനായില്ല. വീണ്ടും ശ്രമിക്കുക.",
      language: "ഭാഷ",
      welcomeStep: "സ്വാഗതം",
      departmentStep: "വിഭാഗം തിരഞ്ഞെടുക്കുക",
      schemeDetails: "പദ്ധതി വിശദാംശങ്ങൾ",
      invalid: "ദയവായി സംസ്ഥാനം, പ്രായം, ലിംഗം തിരഞ്ഞെടുക്കുക.",
    },

    pa: {
      welcome: "SchemeSaathi 2.0 ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ",
      tagline: "ਆਪਣੇ ਲਈ ਢੁਕਵੀਆਂ ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ ਲੱਭੋ",
      intro: "ਕੁਝ ਬੁਨਿਆਦੀ ਜਾਣਕਾਰੀ ਦਿਓ ਅਤੇ ਆਪਣੀ ਲੋੜ ਦਾ ਖੇਤਰ ਚੁਣੋ।",
      find: "ਮੇਰੀ ਯੋਜਨਾ ਲੱਭੋ",
      details: "ਨਿੱਜੀ ਜਾਣਕਾਰੀ",
      tell: "ਆਪਣੇ ਬਾਰੇ ਦੱਸੋ",
      basic: "ਸੰਬੰਧਿਤ ਯੋਜਨਾਵਾਂ ਲੱਭਣ ਲਈ ਅਸੀਂ ਸਿਰਫ਼ ਬੁਨਿਆਦੀ ਜਾਣਕਾਰੀ ਵਰਤਦੇ ਹਾਂ।",
      name: "ਨਾਮ",
      optional: "ਵਿਕਲਪਿਕ",
      state: "ਰਾਜ",
      selectState: "ਆਪਣਾ ਰਾਜ ਚੁਣੋ",
      age: "ਉਮਰ",
      gender: "ਲਿੰਗ",
      male: "ਪੁਰਸ਼",
      female: "ਔਰਤ",
      other: "ਹੋਰ",
      occupation: "ਪੇਸ਼ਾ",
      occupationPlaceholder: "ਉਦਾਹਰਨ: ਕਿਸਾਨ, ਵਿਦਿਆਰਥੀ, ਕਰਮਚਾਰੀ",
      income: "ਮਹੀਨਾਵਾਰ ਆਮਦਨ",
      selectIncome: "ਆਮਦਨ ਸੀਮਾ ਚੁਣੋ",
      family: "ਪਰਿਵਾਰ ਦਾ ਆਕਾਰ",
      selectFamily: "ਪਰਿਵਾਰ ਦਾ ਆਕਾਰ ਚੁਣੋ",
      member: "ਮੈਂਬਰ",
      members: "ਮੈਂਬਰ",
      continue: "ਜਾਰੀ ਰੱਖੋ",
      back: "ਵਾਪਸ",
      whatNeed: "ਤੁਹਾਨੂੰ ਕੀ ਚਾਹੀਦਾ ਹੈ?",
      chooseField: "ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ ਲੱਭਣ ਲਈ ਵਿਭਾਗ ਜਾਂ ਖੇਤਰ ਚੁਣੋ।",
      dashboard: "ਯੋਜਨਾ ਡੈਸ਼ਬੋਰਡ",
      schemesScreened: "ਜਾਂਚੀਆਂ ਯੋਜਨਾਵਾਂ",
      applicable: "ਲਾਗੂ",
      possible: "ਸੰਭਵ ਤੌਰ 'ਤੇ ਲਾਗੂ",
      notApplicable: "ਲਾਗੂ ਨਹੀਂ",
      all: "ਸਾਰੀਆਂ ਯੋਜਨਾਵਾਂ",
      search: "ਯੋਜਨਾਵਾਂ ਖੋਜੋ...",
      noSchemes: "ਕੋਈ ਯੋਜਨਾ ਨਹੀਂ ਮਿਲੀ",
      tryAgain: "ਕੋਈ ਹੋਰ ਫਿਲਟਰ ਜਾਂ ਵਿਭਾਗ ਅਜ਼ਮਾਓ।",
      changeDepartment: "ਵਿਭਾਗ ਬਦਲੋ",
      viewAnalysis: "ਪੂਰਾ ਵਿਸ਼ਲੇਸ਼ਣ ਵੇਖੋ",
      benefit: "ਯੋਜਨਾ ਦਾ ਲਾਭ",
      explanation: "ਯੋਗਤਾ ਦੀ ਵਿਆਖਿਆ",
      yourInfo: "ਤੁਹਾਡੀ ਜਾਣਕਾਰੀ",
      criteria: "ਯੋਜਨਾ ਦੇ ਮਾਪਦੰਡ",
      result: "ਨਤੀਜਾ",
      gap: "ਲਾਭ ਅੰਤਰ ਖੋਜ",
      gapText: "SchemeSaathi ਤੁਹਾਡੇ ਲਈ ਸੰਭਾਵੀ ਤੌਰ 'ਤੇ ਸੰਬੰਧਿਤ ਲਾਭਾਂ ਦੀ ਪਛਾਣ ਕਰਦਾ ਹੈ।",
      selectedDepartment: "ਚੁਣਿਆ ਵਿਭਾਗ",
      relevantScheme: "ਸੰਬੰਧਿਤ ਯੋਜਨਾ ਮਿਲੀ",
      guideAvailable: "ਅਰਜ਼ੀ ਮਾਰਗਦਰਸ਼ਨ ਉਪਲਬਧ",
      optimizer: "ਲਾਭ ਤਰਜੀਹ",
      optimizerText: "ਸੰਬੰਧਿਤਤਾ, ਪ੍ਰਭਾਵ ਅਤੇ ਤਰਜੀਹ ਦੇ ਆਧਾਰ 'ਤੇ ਯੋਜਨਾਵਾਂ ਨੂੰ ਦਰਜਾ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ।",
      priority: "ਤਰਜੀਹ ਸਕੋਰ",
      recommendation: "ਸਿਫਾਰਸ਼",
      high: "ਉੱਚ",
      moderate: "ਦਰਮਿਆਨਾ",
      familyGraph: "ਪਰਿਵਾਰਕ ਲਾਭ ਗ੍ਰਾਫ",
      familyText: "ਪਰਿਵਾਰ ਦੇ ਮੈਂਬਰਾਂ ਲਈ ਸੰਭਾਵੀ ਲਾਭ ਵੇਖੋ।",
      family: "ਪਰਿਵਾਰ",
      you: "ਤੁਸੀਂ",
      scheme: "ਯੋਜਨਾ",
      application: "ਅਰਜ਼ੀ ਮਾਰਗਦਰਸ਼ਨ",
      information: "ਜਾਣਕਾਰੀ / ਦਸਤਾਵੇਜ਼",
      official: "ਅਧਿਕਾਰਤ ਸਰਕਾਰੀ ਵੈੱਬਸਾਈਟ",
      notice: "SchemeSaathi ਮੁੱਢਲੀ ਜਾਂਚ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ। ਅੰਤਿਮ ਯੋਗਤਾ ਸੰਬੰਧਿਤ ਸਰਕਾਰੀ ਅਧਿਕਾਰੀ ਦੁਆਰਾ ਨਿਰਧਾਰਤ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।",
      noDocuments: "SchemeSaathi ਸਰਟੀਫਿਕੇਟ ਜਾਂ ਨਿੱਜੀ ਦਸਤਾਵੇਜ਼ ਇਕੱਠੇ, ਅੱਪਲੋਡ ਜਾਂ ਸਟੋਰ ਨਹੀਂ ਕਰਦਾ।",
      assistant: "SchemeSaathi ਸਹਾਇਕ",
      assistantIntro: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਯੋਜਨਾਵਾਂ, ਯੋਗਤਾ, ਲਾਭ ਅਤੇ ਅਰਜ਼ੀ ਪ੍ਰਕਿਰਿਆ ਬਾਰੇ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ।",
      ask: "ਆਪਣਾ ਸਵਾਲ ਪੁੱਛੋ...",
      send: "ਭੇਜੋ",
      clear: "ਸਾਫ਼ ਕਰੋ",
      close: "ਬੰਦ ਕਰੋ",
      quickQuestions: "ਤੁਰੰਤ ਸਵਾਲ",
      whyNot: "ਮੈਂ ਯੋਗ ਕਿਉਂ ਨਹੀਂ ਹਾਂ?",
      howApply: "ਅਰਜ਼ੀ ਕਿਵੇਂ ਦੇਣੀ ਹੈ?",
      benefitQuestion: "ਮੈਨੂੰ ਕੀ ਲਾਭ ਮਿਲੇਗਾ?",
      whichFirst: "ਮੈਨੂੰ ਪਹਿਲਾਂ ਕਿਸ ਯੋਜਨਾ ਲਈ ਅਰਜ਼ੀ ਦੇਣੀ ਚਾਹੀਦੀ ਹੈ?",
      thinking: "ਸੋਚ ਰਿਹਾ ਹੈ...",
      chatbotError: "ਮਾਫ਼ ਕਰਨਾ, ਸਵਾਲ 'ਤੇ ਕਾਰਵਾਈ ਨਹੀਂ ਹੋ ਸਕੀ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
      language: "ਭਾਸ਼ਾ",
      welcomeStep: "ਸਵਾਗਤ",
      departmentStep: "ਵਿਭਾਗ ਚੁਣੋ",
      schemeDetails: "ਯੋਜਨਾ ਵੇਰਵੇ",
      invalid: "ਕਿਰਪਾ ਕਰਕੇ ਰਾਜ, ਉਮਰ ਅਤੇ ਲਿੰਗ ਚੁਣੋ।",
    },

    or: {
      welcome: "SchemeSaathi 2.0 କୁ ସ୍ୱାଗତ",
      tagline: "ଆପଣଙ୍କ ପାଇଁ ଉପଯୁକ୍ତ ସରକାରୀ ଯୋଜନା ଖୋଜନ୍ତୁ",
      intro: "କିଛି ମୌଳିକ ସୂଚନା ଦିଅନ୍ତୁ ଏବଂ ଆପଣଙ୍କ ଆବଶ୍ୟକତାର କ୍ଷେତ୍ର ବାଛନ୍ତୁ।",
      find: "ମୋ ଯୋଜନା ଖୋଜନ୍ତୁ",
      details: "ବ୍ୟକ୍ତିଗତ ସୂଚନା",
      tell: "ଆପଣଙ୍କ ବିଷୟରେ କୁହନ୍ତୁ",
      basic: "ଉପଯୁକ୍ତ ଯୋଜନା ଖୋଜିବା ପାଇଁ ଆମେ କେବଳ ମୌଳିକ ସୂଚନା ବ୍ୟବହାର କରୁ।",
      name: "ନାମ",
      optional: "ଇଚ୍ଛାଧୀନ",
      state: "ରାଜ୍ୟ",
      selectState: "ଆପଣଙ୍କ ରାଜ୍ୟ ବାଛନ୍ତୁ",
      age: "ବୟସ",
      gender: "ଲିଙ୍ଗ",
      male: "ପୁରୁଷ",
      female: "ମହିଳା",
      other: "ଅନ୍ୟ",
      occupation: "ବୃତ୍ତି",
      occupationPlaceholder: "ଉଦାହରଣ: କୃଷକ, ଛାତ୍ର, କର୍ମଚାରୀ",
      income: "ମାସିକ ଆୟ",
      selectIncome: "ଆୟ ସୀମା ବାଛନ୍ତୁ",
      family: "ପରିବାରର ଆକାର",
      selectFamily: "ପରିବାରର ଆକାର ବାଛନ୍ତୁ",
      member: "ସଦସ୍ୟ",
      members: "ସଦସ୍ୟ",
      continue: "ଆଗକୁ ଯାଆନ୍ତୁ",
      back: "ପଛକୁ",
      whatNeed: "ଆପଣଙ୍କୁ କଣ ଆବଶ୍ୟକ?",
      chooseField: "ସରକାରୀ ଯୋଜନା ଖୋଜିବା ପାଇଁ ବିଭାଗ ବାଛନ୍ତୁ।",
      dashboard: "ଯୋଜନା ଡ୍ୟାସବୋର୍ଡ",
      schemesScreened: "ଯାଞ୍ଚ କରାଯାଇଥିବା ଯୋଜନା",
      applicable: "ପ୍ରଯୁଜ୍ୟ",
      possible: "ସମ୍ଭାବ୍ୟ ପ୍ରଯୁଜ୍ୟ",
      notApplicable: "ପ୍ରଯୁଜ୍ୟ ନୁହେଁ",
      all: "ସମସ୍ତ ଯୋଜନା",
      search: "ଯୋଜନା ଖୋଜନ୍ତୁ...",
      noSchemes: "କୌଣସି ଯୋଜନା ମିଳିଲା ନାହିଁ",
      tryAgain: "ଅନ୍ୟ ଫିଲ୍ଟର ବା ବିଭାଗ ଚେଷ୍ଟା କରନ୍ତୁ।",
      changeDepartment: "ବିଭାଗ ବଦଳାନ୍ତୁ",
      viewAnalysis: "ସମ୍ପୂର୍ଣ୍ଣ ବିଶ୍ଳେଷଣ ଦେଖନ୍ତୁ",
      benefit: "ଯୋଜନାର ଲାଭ",
      explanation: "ଯୋଗ୍ୟତା ବ୍ୟାଖ୍ୟା",
      yourInfo: "ଆପଣଙ୍କ ସୂଚନା",
      criteria: "ଯୋଜନା ମାନଦଣ୍ଡ",
      result: "ଫଳାଫଳ",
      gap: "ଲାଭ ଅନ୍ତର ଚିହ୍ନଟ",
      gapText: "SchemeSaathi ଆପଣଙ୍କ ପାଇଁ ସମ୍ଭାବ୍ୟ ଲାଭ ଚିହ୍ନଟ କରେ।",
      selectedDepartment: "ଚୟନ କରାଯାଇଥିବା ବିଭାଗ",
      relevantScheme: "ସମ୍ପର୍କିତ ଯୋଜନା ମିଳିଲା",
      guideAvailable: "ଆବେଦନ ମାର୍ଗଦର୍ଶିକା ଉପଲବ୍ଧ",
      optimizer: "ଲାଭ ପ୍ରାଥମିକତା",
      optimizerText: "ସମ୍ପର୍କିତତା, ପ୍ରଭାବ ଏବଂ ପ୍ରାଥମିକତା ଆଧାରରେ ଯୋଜନା ର୍ୟାଙ୍କ କରାଯାଏ।",
      priority: "ପ୍ରାଥମିକତା ସ୍କୋର",
      recommendation: "ସୁପାରିଶ",
      high: "ଉଚ୍ଚ",
      moderate: "ମଧ୍ୟମ",
      familyGraph: "ପରିବାର ଲାଭ ଗ୍ରାଫ",
      familyText: "ପରିବାର ସଦସ୍ୟଙ୍କ ସମ୍ଭାବ୍ୟ ଲାଭ ଦେଖନ୍ତୁ।",
      family: "ପରିବାର",
      you: "ଆପଣ",
      scheme: "ଯୋଜନା",
      application: "ଆବେଦନ ମାର୍ଗଦର୍ଶିକା",
      information: "ସୂଚନା / ଦଲିଲ",
      official: "ଅଧିକୃତ ସରକାରୀ ୱେବସାଇଟ",
      notice: "SchemeSaathi ପ୍ରାଥମିକ ସ୍କ୍ରିନିଂ ପ୍ରଦାନ କରେ। ଅନ୍ତିମ ଯୋଗ୍ୟତା ସମ୍ପର୍କିତ ସରକାରୀ କର୍ତ୍ତୃପକ୍ଷ ନିର୍ଦ୍ଧାରଣ କରନ୍ତି।",
      noDocuments: "SchemeSaathi ପ୍ରମାଣପତ୍ର କିମ୍ବା ବ୍ୟକ୍ତିଗତ ଦଲିଲ ସଂଗ୍ରହ, ଅପଲୋଡ କିମ୍ବା ସଂରକ୍ଷଣ କରେ ନାହିଁ।",
      assistant: "SchemeSaathi ସହାୟକ",
      assistantIntro: "ନମସ୍କାର! ମୁଁ ଯୋଜନା, ଯୋଗ୍ୟତା, ଲାଭ ଏବଂ ଆବେଦନ ପ୍ରକ୍ରିୟା ବିଷୟରେ ସହାୟତା କରିପାରିବି।",
      ask: "ଆପଣଙ୍କ ପ୍ରଶ୍ନ ପଚାରନ୍ତୁ...",
      send: "ପଠାନ୍ତୁ",
      clear: "ସଫା କରନ୍ତୁ",
      close: "ବନ୍ଦ କରନ୍ତୁ",
      quickQuestions: "ଦ୍ରୁତ ପ୍ରଶ୍ନ",
      whyNot: "ମୁଁ କାହିଁକି ଯୋଗ୍ୟ ନୁହେଁ?",
      howApply: "କିପରି ଆବେଦନ କରିବି?",
      benefitQuestion: "ମୋତେ କେଉଁ ଲାଭ ମିଳିବ?",
      whichFirst: "ପ୍ରଥମେ କେଉଁ ଯୋଜନା ପାଇଁ ଆବେଦନ କରିବି?",
      thinking: "ଚିନ୍ତା କରୁଛି...",
      chatbotError: "ଦୁଃଖିତ, ପ୍ରଶ୍ନ ପ୍ରକ୍ରିୟାକରଣ ହୋଇପାରିଲା ନାହିଁ। ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ।",
      language: "ଭାଷା",
      welcomeStep: "ସ୍ୱାଗତ",
      departmentStep: "ବିଭାଗ ବାଛନ୍ତୁ",
      schemeDetails: "ଯୋଜନା ବିବରଣୀ",
      invalid: "ଦୟାକରି ରାଜ୍ୟ, ବୟସ ଏବଂ ଲିଙ୍ଗ ବାଛନ୍ତୁ।",
    },

    as: {
      welcome: "SchemeSaathi 2.0 লৈ স্বাগতম",
      tagline: "আপোনাৰ বাবে উপযুক্ত চৰকাৰী আঁচনি বিচাৰি উলিয়াওক",
      intro: "কিছু মৌলিক তথ্য দিয়ক আৰু আপোনাৰ প্ৰয়োজনীয় ক্ষেত্ৰ বাছনি কৰক।",
      find: "মোৰ আঁচনি বিচাৰক",
      details: "ব্যক্তিগত তথ্য",
      tell: "আপোনাৰ বিষয়ে কওক",
      basic: "প্ৰাসংগিক আঁচনি বিচাৰিবলৈ আমি কেৱল মৌলিক তথ্য ব্যৱহাৰ কৰোঁ।",
      name: "নাম",
      optional: "ঐচ্ছিক",
      state: "ৰাজ্য",
      selectState: "আপোনাৰ ৰাজ্য বাছনি কৰক",
      age: "বয়স",
      gender: "লিংগ",
      male: "পুৰুষ",
      female: "মহিলা",
      other: "অন্যান্য",
      occupation: "বৃত্তি",
      occupationPlaceholder: "উদাহৰণ: কৃষক, ছাত্ৰ, কৰ্মচাৰী",
      income: "মাহিলী আয়",
      selectIncome: "আয়ৰ পৰিসৰ বাছনি কৰক",
      family: "পৰিয়ালৰ আকাৰ",
      selectFamily: "পৰিয়ালৰ আকাৰ বাছনি কৰক",
      member: "সদস্য",
      members: "সদস্য",
      continue: "আগবাঢ়ক",
      back: "পিছলৈ",
      whatNeed: "আপোনাক কি লাগে?",
      chooseField: "চৰকাৰী আঁচনি বিচাৰিবলৈ বিভাগ বা ক্ষেত্ৰ বাছনি কৰক।",
      dashboard: "আঁচনি ডেশ্বব'ৰ্ড",
      schemesScreened: "পৰীক্ষা কৰা আঁচনি",
      applicable: "প্ৰযোজ্য",
      possible: "সম্ভাৱ্যভাৱে প্ৰযোজ্য",
      notApplicable: "প্ৰযোজ্য নহয়",
      all: "সকলো আঁচনি",
      search: "আঁচনি বিচাৰক...",
      noSchemes: "কোনো আঁচনি পোৱা নগ'ল",
      tryAgain: "অন্য ফিল্টাৰ বা বিভাগ চেষ্টা কৰক।",
      changeDepartment: "বিভাগ সলনি কৰক",
      viewAnalysis: "সম্পূৰ্ণ বিশ্লেষণ চাওক",
      benefit: "আঁচনিৰ সুবিধা",
      explanation: "যোগ্যতাৰ ব্যাখ্যা",
      yourInfo: "আপোনাৰ তথ্য",
      criteria: "আঁচনিৰ মাপকাঠী",
      result: "ফলাফল",
      gap: "সুবিধা ঘাটতি চিনাক্তকৰণ",
      gapText: "SchemeSaathi-য়ে আপোনাৰ বাবে সম্ভাৱ্য প্ৰাসংগিক সুবিধা চিনাক্ত কৰে।",
      selectedDepartment: "নিৰ্বাচিত বিভাগ",
      relevantScheme: "প্ৰাসংগিক আঁচনি পোৱা গৈছে",
      guideAvailable: "আবেদন নিৰ্দেশনা উপলব্ধ",
      optimizer: "সুবিধা অগ্ৰাধিকাৰ",
      optimizerText: "প্ৰাসংগিকতা, প্ৰভাৱ আৰু অগ্ৰাধিকাৰৰ ভিত্তিত আঁচনি ৰেংক কৰা হয়।",
      priority: "অগ্ৰাধিকাৰ স্ক'ৰ",
      recommendation: "পৰামৰ্শ",
      high: "উচ্চ",
      moderate: "মধ্যম",
      familyGraph: "পৰিয়াল সুবিধা গ্ৰাফ",
      familyText: "পৰিয়ালৰ সদস্যসকলৰ সম্ভাৱ্য সুবিধা চাওক।",
      family: "পৰিয়াল",
      you: "আপুনি",
      scheme: "আঁচনি",
      application: "আবেদন নিৰ্দেশনা",
      information: "তথ্য / নথি",
      official: "চৰকাৰী ৱেবছাইট",
      notice: "SchemeSaathi-য়ে প্ৰাথমিক পৰীক্ষা প্ৰদান কৰে। চূড়ান্ত যোগ্যতা সংশ্লিষ্ট চৰকাৰী কৰ্তৃপক্ষই নিৰ্ধাৰণ কৰে।",
      noDocuments: "SchemeSaathi-য়ে প্ৰমাণপত্ৰ বা ব্যক্তিগত নথি সংগ্ৰহ, আপলোড বা সংৰক্ষণ নকৰে।",
      assistant: "SchemeSaathi সহায়ক",
      assistantIntro: "নমস্কাৰ! মই আঁচনি, যোগ্যতা, সুবিধা আৰু আবেদন প্ৰক্ৰিয়াৰ বিষয়ে সহায় কৰিব পাৰোঁ।",
      ask: "আপোনাৰ প্ৰশ্ন সোধক...",
      send: "পঠিয়াওক",
      clear: "পৰিষ্কাৰ",
      close: "বন্ধ কৰক",
      quickQuestions: "দ্ৰুত প্ৰশ্ন",
      whyNot: "মই কিয় যোগ্য নহয়?",
      howApply: "কেনেকৈ আবেদন কৰিম?",
      benefitQuestion: "মই কি সুবিধা পাম?",
      whichFirst: "প্ৰথমে কোনখন আঁচনিৰ বাবে আবেদন কৰিম?",
      thinking: "ভাবি আছে...",
      chatbotError: "ক্ষমা কৰিব, প্ৰশ্নটো প্ৰক্ৰিয়া কৰিব পৰা নগ'ল। পুনৰ চেষ্টা কৰক।",
      language: "ভাষা",
      welcomeStep: "স্বাগতম",
      departmentStep: "বিভাগ বাছনি কৰক",
      schemeDetails: "আঁচনিৰ বিৱৰণ",
      invalid: "অনুগ্ৰহ কৰি ৰাজ্য, বয়স আৰু লিংগ বাছনি কৰক।",
    },

    ur: {
      welcome: "SchemeSaathi 2.0 میں خوش آمدید",
      tagline: "اپنے لیے موزوں سرکاری اسکیمیں تلاش کریں",
      intro: "کچھ بنیادی معلومات دیں اور اپنی ضرورت کا شعبہ منتخب کریں۔",
      find: "میری اسکیم تلاش کریں",
      details: "ذاتی معلومات",
      tell: "اپنے بارے میں بتائیں",
      basic: "متعلقہ اسکیمیں تلاش کرنے کے لیے ہم صرف بنیادی معلومات استعمال کرتے ہیں۔",
      name: "نام",
      optional: "اختیاری",
      state: "ریاست",
      selectState: "اپنی ریاست منتخب کریں",
      age: "عمر",
      gender: "جنس",
      male: "مرد",
      female: "خاتون",
      other: "دیگر",
      occupation: "پیشہ",
      occupationPlaceholder: "مثال: کسان، طالب علم، ملازم",
      income: "ماہانہ آمدنی",
      selectIncome: "آمدنی کی حد منتخب کریں",
      family: "خاندان کا حجم",
      selectFamily: "خاندان کا حجم منتخب کریں",
      member: "رکن",
      members: "ارکان",
      continue: "جاری رکھیں",
      back: "واپس",
      whatNeed: "آپ کو کیا چاہیے؟",
      chooseField: "سرکاری اسکیمیں تلاش کرنے کے لیے شعبہ منتخب کریں۔",
      dashboard: "اسکیم ڈیش بورڈ",
      schemesScreened: "جانچی گئی اسکیمیں",
      applicable: "قابل اطلاق",
      possible: "ممکنہ طور پر قابل اطلاق",
      notApplicable: "قابل اطلاق نہیں",
      all: "تمام اسکیمیں",
      search: "اسکیمیں تلاش کریں...",
      noSchemes: "کوئی اسکیم نہیں ملی",
      tryAgain: "کوئی اور فلٹر یا شعبہ آزمائیں۔",
      changeDepartment: "شعبہ تبدیل کریں",
      viewAnalysis: "مکمل تجزیہ دیکھیں",
      benefit: "اسکیم کا فائدہ",
      explanation: "اہلیت کی وضاحت",
      yourInfo: "آپ کی معلومات",
      criteria: "اسکیم کے معیار",
      result: "نتیجہ",
      gap: "فوائد کا فرق",
      gapText: "SchemeSaathi آپ کے لیے ممکنہ طور پر متعلقہ فوائد کی نشاندہی کرتا ہے۔",
      selectedDepartment: "منتخب شعبہ",
      relevantScheme: "متعلقہ اسکیم مل گئی",
      guideAvailable: "درخواست کی رہنمائی دستیاب ہے",
      optimizer: "فوائد کی ترجیح",
      optimizerText: "متعلقہ، اثر اور ترجیح کی بنیاد پر اسکیموں کی درجہ بندی کی جاتی ہے۔",
      priority: "ترجیحی اسکور",
      recommendation: "سفارش",
      high: "اعلیٰ",
      moderate: "درمیانہ",
      familyGraph: "خاندانی فوائد کا گراف",
      familyText: "خاندان کے افراد کے لیے ممکنہ فوائد دیکھیں۔",
      family: "خاندان",
      you: "آپ",
      scheme: "اسکیم",
      application: "درخواست کی رہنمائی",
      information: "معلومات / دستاویزات",
      official: "سرکاری ویب سائٹ",
      notice: "SchemeSaathi ابتدائی اسکریننگ فراہم کرتا ہے۔ حتمی اہلیت متعلقہ سرکاری اتھارٹی طے کرتی ہے۔",
      noDocuments: "SchemeSaathi سرٹیفکیٹس یا ذاتی دستاویزات جمع، اپ لوڈ یا محفوظ نہیں کرتا۔",
      assistant: "SchemeSaathi معاون",
      assistantIntro: "السلام علیکم! میں اسکیموں، اہلیت، فوائد اور درخواست کے طریقہ کار میں مدد کر سکتا ہوں۔",
      ask: "اپنا سوال پوچھیں...",
      send: "بھیجیں",
      clear: "صاف کریں",
      close: "بند کریں",
      quickQuestions: "فوری سوالات",
      whyNot: "میں اہل کیوں نہیں ہوں؟",
      howApply: "درخواست کیسے دوں؟",
      benefitQuestion: "مجھے کیا فائدہ ملے گا؟",
      whichFirst: "مجھے پہلے کس اسکیم کے لیے درخواست دینی چاہیے؟",
      thinking: "سوچ رہا ہے...",
      chatbotError: "معذرت، سوال پر کارروائی نہیں ہو سکی۔ دوبارہ کوشش کریں۔",
      language: "زبان",
      welcomeStep: "خوش آمدید",
      departmentStep: "شعبہ منتخب کریں",
      schemeDetails: "اسکیم کی تفصیلات",
      invalid: "براہ کرم ریاست، عمر اور جنس منتخب کریں۔",
    },

    sa: {
      welcome: "SchemeSaathi 2.0 मध्ये स्वागतम्",
      tagline: "भवतः कृते उपयुक्ताः सर्वकारीयाः योजनाः अन्विष्यताम्",
      intro: "काञ्चित् मूलभूतां सूचनां दत्त्वा आवश्यकं क्षेत्रं चिनुत।",
      find: "मम योजनां अन्वेषयतु",
      details: "व्यक्तिगतविवरणम्",
      tell: "स्वविषये कथयतु",
      basic: "उपयुक्तयोजनानाम् अन्वेषणाय केवलं मूलभूता सूचना प्रयुज्यते।",
      name: "नाम",
      optional: "वैकल्पिकम्",
      state: "राज्यम्",
      selectState: "स्वराज्यं चिनुत",
      age: "वयः",
      gender: "लिङ्गम्",
      male: "पुरुषः",
      female: "स्त्री",
      other: "अन्यत्",
      occupation: "व्यवसायः",
      occupationPlaceholder: "उदाहरणम्: कृषकः, छात्रः, कर्मचारी",
      income: "मासिक-आयः",
      selectIncome: "आयसीमां चिनुत",
      family: "परिवारस्य आकारः",
      selectFamily: "परिवारस्य आकारं चिनुत",
      member: "सदस्यः",
      members: "सदस्याः",
      continue: "अग्रे गच्छतु",
      back: "पृष्ठतः",
      whatNeed: "भवतः किम् आवश्यकम्?",
      chooseField: "सर्वकारीययोजनानाम् अन्वेषणाय विभागं चिनुत।",
      dashboard: "योजनाडैशबोर्ड",
      schemesScreened: "परीक्षिताः योजनाः",
      applicable: "लागू",
      possible: "सम्भाव्यरूपेण लागू",
      notApplicable: "लागू न",
      all: "सर्वाः योजनाः",
      search: "योजनाः अन्विष्यन्ताम्...",
      noSchemes: "कापि योजना न प्राप्ता",
      tryAgain: "अन्यं फिल्टरं वा विभागं प्रयत्नयतु।",
      changeDepartment: "विभागं परिवर्तयतु",
      viewAnalysis: "पूर्णविश्लेषणं पश्यतु",
      benefit: "योजनायाः लाभः",
      explanation: "योग्यताविवरणम्",
      yourInfo: "भवतः सूचना",
      criteria: "योजनामानदण्डाः",
      result: "परिणामः",
      gap: "लाभ-अन्तर-अन्वेषणम्",
      gapText: "SchemeSaathi भवतः कृते सम्भाव्यान् लाभान् चिनोति।",
      selectedDepartment: "चयनितः विभागः",
      relevantScheme: "सम्बद्धा योजना प्राप्ता",
      guideAvailable: "आवेदनमार्गदर्शनम् उपलब्धम्",
      optimizer: "लाभप्राथमिकता",
      optimizerText: "सम्बद्धता, प्रभावः प्राथमिकता च आधृत्य योजनाः क्रमिताः भवन्ति।",
      priority: "प्राथमिकताङ्कः",
      recommendation: "अनुशंसा",
      high: "उच्चः",
      moderate: "मध्यमः",
      familyGraph: "परिवारलाभचित्रम्",
      familyText: "परिवारसदस्यानां सम्भाव्यान् लाभान् पश्यतु।",
      family: "परिवारः",
      you: "भवान्",
      scheme: "योजना",
      application: "आवेदनमार्गदर्शनम्",
      information: "सूचना / दस्तावेजाः",
      official: "अधिकृतसर्वकारीयजालपुटम्",
      notice: "SchemeSaathi प्राथमिकपरीक्षणं प्रददाति। अन्तिमयोग्यता सम्बन्धितेन सर्वकारीयप्राधिकरणेन निर्धार्यते।",
      noDocuments: "SchemeSaathi प्रमाणपत्राणि व्यक्तिगतदस्तावेजांश्च न संगृह्णाति, न अपलोडयति, न च सञ्चयति।",
      assistant: "SchemeSaathi सहायकः",
      assistantIntro: "नमस्ते! योजनाः, योग्यता, लाभाः आवेदनप्रक्रिया च विषये अहं साहाय्यं कर्तुं शक्नोमि।",
      ask: "स्वप्रश्नं पृच्छतु...",
      send: "प्रेषयतु",
      clear: "शोधयतु",
      close: "पिधत्ताम्",
      quickQuestions: "शीघ्रप्रश्नाः",
      whyNot: "अहं योग्यः किमर्थं नास्मि?",
      howApply: "कथम् आवेदनं कुर्याम्?",
      benefitQuestion: "मह्यं कः लाभः प्राप्स्यति?",
      whichFirst: "प्रथमं कस्याः योजनायाः आवेदनं कुर्याम्?",
      thinking: "चिन्तयति...",
      chatbotError: "क्षम्यताम्, प्रश्नस्य प्रक्रिया न शक्या। पुनः प्रयत्नं कुरुत।",
      language: "भाषा",
      welcomeStep: "स्वागतम्",
      departmentStep: "विभागं चिनुत",
      schemeDetails: "योजनाविवरणम्",
      invalid: "कृपया राज्यं, वयः, लिङ्गं च चिनुत।",
    },
  };

  /*
    Some languages are intentionally mapped to English fallback
    for any missing UI key. This prevents undefined text.
  */

  const t = (key) => T[language]?.[key] || T.en[key] || key;

  /* =========================================================
     STATES
  ========================================================= */

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Delhi",
    "Jammu & Kashmir",
    "Ladakh",
    "Puducherry",
  ];

  /* =========================================================
     DEPARTMENTS
  ========================================================= */

  const departments = [
    {
      name: "Agriculture",
      icon: "🌾",
      description: "Farming, crops and agricultural support",
    },
    {
      name: "Education",
      icon: "🎓",
      description: "Scholarships and student support",
    },
    {
      name: "Health",
      icon: "🏥",
      description: "Healthcare and medical assistance",
    },
    {
      name: "Housing",
      icon: "🏠",
      description: "Housing and construction support",
    },
    {
      name: "Women & Child",
      icon: "👩‍👧",
      description: "Women and child welfare",
    },
    {
      name: "Employment",
      icon: "💼",
      description: "Jobs, skills and employment",
    },
    {
      name: "Social Welfare",
      icon: "🤝",
      description: "Pension and welfare assistance",
    },
    {
      name: "Fisheries",
      icon: "🐟",
      description: "Fisheries and fishing support",
    },
    {
      name: "Animal Husbandry",
      icon: "🐄",
      description: "Livestock and animal farming",
    },
    {
      name: "MSME & Business",
      icon: "🏢",
      description: "Business and entrepreneurship",
    },
  ];

  /* =========================================================
     SCHEME DATABASE
  ========================================================= */

  const schemes = [
    {
      id: 1,
      name: "PM-KISAN",
      department: "Agriculture",
      state: "All India",
      benefit: "Income support for eligible farmer families.",
      eligibility:
        "Eligible farmer families as per the scheme guidelines.",
      age: "Adult applicant",
      income: "As per current scheme guidelines",
      priority: 95,
      impact: "High",
      application:
        "Check eligibility, visit the official PM-KISAN portal, follow the current registration procedure and submit required details.",
      website: "https://pmkisan.gov.in/",
    },
    {
      id: 2,
      name: "Pradhan Mantri Fasal Bima Yojana",
      department: "Agriculture",
      state: "All India",
      benefit: "Crop insurance support against specified crop losses.",
      eligibility:
        "Eligibility depends on notified crops, areas, seasons and applicable guidelines.",
      age: "Adult applicant",
      income: "Not the primary screening factor",
      priority: 90,
      impact: "High",
      application:
        "Check the crop and season notification applicable to your area and follow the official enrolment procedure.",
      website: "https://pmfby.gov.in/",
    },
    {
      id: 3,
      name: "Agriculture Infrastructure Fund",
      department: "Agriculture",
      state: "All India",
      benefit:
        "Financial support for eligible agricultural infrastructure projects.",
      eligibility:
        "Eligibility depends on the applicant category and project conditions.",
      age: "Adult applicant",
      income: "Depends on applicant/project",
      priority: 82,
      impact: "High",
      application:
        "Review the current scheme guidelines and complete the application through the official platform.",
      website: "https://agriinfra.dac.gov.in/",
    },
    {
      id: 4,
      name: "National Scholarship Portal Schemes",
      department: "Education",
      state: "All India",
      benefit: "Scholarship opportunities for eligible students.",
      eligibility:
        "Eligibility varies according to the particular scholarship.",
      age: "Varies",
      income: "Varies",
      priority: 90,
      impact: "High",
      application:
        "Select the appropriate scholarship on the official portal and follow the application procedure.",
      website: "https://scholarships.gov.in/",
    },
    {
      id: 5,
      name: "Ayushman Bharat PM-JAY",
      department: "Health",
      state: "All India",
      benefit: "Healthcare coverage for eligible beneficiaries.",
      eligibility:
        "Eligibility is determined according to the applicable beneficiary database and scheme rules.",
      age: "Varies",
      income: "As per scheme criteria",
      priority: 95,
      impact: "Very High",
      application:
        "Check beneficiary eligibility using official PM-JAY channels and follow the applicable process.",
      website: "https://pmjay.gov.in/",
    },
    {
      id: 6,
      name: "Pradhan Mantri Awas Yojana",
      department: "Housing",
      state: "All India",
      benefit: "Housing assistance for eligible beneficiaries.",
      eligibility:
        "Eligibility depends on the applicable housing programme and beneficiary criteria.",
      age: "Adult applicant",
      income: "Varies",
      priority: 88,
      impact: "High",
      application:
        "Check the appropriate official housing portal and follow the current application procedure.",
      website: "https://pmaymis.gov.in/",
    },
    {
      id: 7,
      name: "Women Welfare Programmes",
      department: "Women & Child",
      state: "All India",
      benefit:
        "Support through applicable women and child welfare programmes.",
      eligibility: "Eligibility depends on the particular programme.",
      age: "Varies",
      income: "Varies",
      priority: 87,
      impact: "High",
      application:
        "Identify the relevant programme and follow the official Women and Child Development procedure.",
      website: "https://wcd.nic.in/",
    },
    {
      id: 8,
      name: "National Career Service",
      department: "Employment",
      state: "All India",
      benefit:
        "Employment opportunities, career services and job-related support.",
      eligibility:
        "Services vary according to the opportunity or programme.",
      age: "Generally working-age users",
      income: "Not always required",
      priority: 82,
      impact: "High",
      application:
        "Create or use your profile on the official portal and explore applicable employment services.",
      website: "https://www.ncs.gov.in/",
    },
    {
      id: 9,
      name: "Social Welfare Assistance",
      department: "Social Welfare",
      state: "All India",
      benefit:
        "Welfare assistance under applicable government programmes.",
      eligibility:
        "Eligibility varies by programme and beneficiary category.",
      age: "Varies",
      income: "Varies",
      priority: 80,
      impact: "High",
      application:
        "Identify the relevant welfare programme and follow the official application process.",
      website: "https://www.india.gov.in/",
    },
    {
      id: 10,
      name: "Fisheries Development Programmes",
      department: "Fisheries",
      state: "All India",
      benefit: "Support for eligible fisheries-related activities.",
      eligibility:
        "Eligibility varies by programme and applicant category.",
      age: "Adult applicant",
      income: "Varies",
      priority: 78,
      impact: "High",
      application:
        "Check the applicable fisheries programme and follow the official department procedure.",
      website: "https://dof.gov.in/",
    },
    {
      id: 11,
      name: "Livestock Development Programmes",
      department: "Animal Husbandry",
      state: "All India",
      benefit:
        "Support for eligible livestock and animal husbandry activities.",
      eligibility: "Eligibility varies according to the programme.",
      age: "Adult applicant",
      income: "Varies",
      priority: 76,
      impact: "High",
      application:
        "Check official Animal Husbandry resources and follow the applicable procedure.",
      website: "https://dahd.nic.in/",
    },
    {
      id: 12,
      name: "MSME Support Programmes",
      department: "MSME & Business",
      state: "All India",
      benefit:
        "Business, entrepreneurship and MSME development support.",
      eligibility:
        "Eligibility varies according to the particular MSME programme.",
      age: "Adult applicant",
      income: "Varies",
      priority: 84,
      impact: "High",
      application:
        "Identify the appropriate MSME programme and follow its official application procedure.",
      website: "https://msme.gov.in/",
    },
  ];

  /* =========================================================
     APP STATE
  ========================================================= */

  const [step, setStep] = useState("welcome");

  const [user, setUser] = useState({
    name: "",
    state: "",
    age: "",
    gender: "",
    occupation: "",
    income: "",
    familySize: "",
  });

  const [department, setDepartment] = useState("");
  const [selectedScheme, setSelectedScheme] = useState(null);

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  /* =========================================================
     CHATBOT STATE
  ========================================================= */

  const [chatOpen, setChatOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: t("assistantIntro"),
    },
  ]);

  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);

  /*
    Rebuild welcome chatbot message when language changes.
  */

  React.useEffect(() => {
    setMessages((old) => {
      if (old.length === 1 && old[0].role === "assistant") {
        return [
          {
            role: "assistant",
            text: t("assistantIntro"),
          },
        ];
      }

      return old;
    });
  }, [language]);

  /* =========================================================
     ELIGIBILITY ENGINE
  ========================================================= */

  function getStatus(scheme) {
    const age = Number(user.age);

    if (!age) {
      return "Possibly Applicable";
    }

    if (
      scheme.department === "Agriculture" &&
      age < 18
    ) {
      return "Not Applicable";
    }

    if (
      scheme.department === "Employment" &&
      age < 18
    ) {
      return "Not Applicable";
    }

    if (
      scheme.department === "Housing" &&
      age < 18
    ) {
      return "Not Applicable";
    }

    if (
      scheme.department === "MSME & Business" &&
      age < 18
    ) {
      return "Not Applicable";
    }

    if (
      scheme.department === "Women & Child" &&
      user.gender === "Male"
    ) {
      return "Possibly Applicable";
    }

    if (scheme.department === "Agriculture") {
      if (
        user.occupation
          .toLowerCase()
          .includes("farm")
      ) {
        return "Applicable";
      }

      if (
        user.occupation
          .toLowerCase()
          .includes("agri")
      ) {
        return "Applicable";
      }

      return "Possibly Applicable";
    }

    return "Possibly Applicable";
  }

  /* =========================================================
     FILTERED SCHEMES
  ========================================================= */

  const filteredSchemes = useMemo(() => {
    return schemes.filter((scheme) => {
      const status = getStatus(scheme);

      const matchesDepartment =
        scheme.department === department;

      const matchesFilter =
        filter === "All" || status === filter;

      const matchesSearch =
        scheme.name
          .toLowerCase()
          .includes(search.toLowerCase());

      return (
        matchesDepartment &&
        matchesFilter &&
        matchesSearch
      );
    });
  }, [
    department,
    filter,
    search,
    user.age,
    user.gender,
    user.occupation,
  ]);

  const departmentSchemes = schemes.filter(
    (scheme) =>
      scheme.department === department
  );

  const applicable = departmentSchemes.filter(
    (scheme) =>
      getStatus(scheme) === "Applicable"
  ).length;

  const possible = departmentSchemes.filter(
    (scheme) =>
      getStatus(scheme) === "Possibly Applicable"
  ).length;

  const notApplicable = departmentSchemes.filter(
    (scheme) =>
      getStatus(scheme) === "Not Applicable"
  ).length;

  /* =========================================================
     NAVIGATION
  ========================================================= */

  function continueDetails() {
    if (!user.state || !user.age || !user.gender) {
      alert(t("invalid"));
      return;
    }

    setStep("department");
  }

  function chooseDepartment(name) {
    setDepartment(name);
    setFilter("All");
    setSearch("");
    setStep("dashboard");
  }

  function statusClass(status) {
    if (status === "Applicable") {
      return "status applicable";
    }

    if (status === "Possibly Applicable") {
      return "status possible";
    }

    return "status notApplicable";
  }

  /* =========================================================
     CHATBOT
  ========================================================= */

  function buildLocalAIResponse(question) {
    const q = question.toLowerCase();

    const scheme = selectedScheme;

    if (
      q.includes("why") &&
      (q.includes("not") || q.includes("eligible"))
    ) {
      if (!scheme) {
        return {
          en: "Please open a scheme first. Then I can explain its preliminary eligibility result.",
        }[language] ||
          "Please open a scheme first. Then I can explain its preliminary eligibility result.";
      }

      const status = getStatus(scheme);

      if (status === "Applicable") {
        return `Based on the information you entered, ${scheme.name} is currently marked as Applicable in the preliminary screening. Final eligibility must be confirmed by the concerned government authority.`;
      }

      if (status === "Not Applicable") {
        return `Based on the current preliminary rules, ${scheme.name} is marked as Not Applicable for your profile. The main screening reason is related to the information entered in your profile. Please check the official scheme rules for final confirmation.`;
      }

      return `Your current result for ${scheme.name} is Possibly Applicable. This means the available profile information is not enough to confirm eligibility. Please check the official eligibility conditions before applying.`;
    }

    if (
      q.includes("benefit") ||
      q.includes("amount") ||
      q.includes("money") ||
      q.includes("लाभ") ||
      q.includes("நன்மை")
    ) {
      if (scheme) {
        return `${scheme.name}: ${scheme.benefit} ${scheme.amount || ""}`;
      }

      return "Please select a scheme and I can explain its benefit.";
    }

    if (
      q.includes("apply") ||
      q.includes("application") ||
      q.includes("how")
    ) {
      if (scheme) {
        return `${scheme.name}: ${scheme.application} Official website: ${scheme.website}`;
      }

      return "Please select a scheme first. I can then explain the application procedure.";
    }

    if (
      q.includes("which") &&
      (q.includes("first") ||
        q.includes("best") ||
        q.includes("scheme"))
    ) {
      const ranked = [...departmentSchemes]
        .sort((a, b) => b.priority - a.priority)
        .slice(0, 3);

      if (ranked.length) {
        return `Based on the current prototype ranking, you can explore these first: ${ranked
          .map((x, i) => `${i + 1}. ${x.name}`)
          .join(", ")}. This is a preliminary ranking, not an official government recommendation.`;
      }
    }

    if (
      q.includes("state") ||
      q.includes("tamil") ||
      q.includes("maharashtra")
    ) {
      return `Your selected state is ${user.state || "not selected"}. SchemeSaathi uses the state as part of the profile context. Always verify whether the selected scheme is currently available in your state through its official government source.`;
    }

    if (
      q.includes("agriculture") ||
      q.includes("farmer") ||
      q.includes("crop")
    ) {
      const agriculture = schemes
        .filter(
          (s) => s.department === "Agriculture"
        )
        .map((s) => s.name)
        .join(", ");

      return `Agriculture schemes currently included in this prototype are: ${agriculture}. The actual production version should connect this list to a maintained government scheme database.`;
    }

    return `I can help you with ${
      scheme
        ? scheme.name
        : "government schemes"
    }. Try asking: "${t("whyNot")}", "${t(
      "howApply"
    )}", "${t(
      "benefitQuestion"
    )}" or "${t("whichFirst")}".`;
  }

  async function sendMessage(text = chatInput) {
    const question = text.trim();

    if (!question || chatLoading) return;

    const userMessage = {
      role: "user",
      text: question,
    };

    setMessages((old) => [
      ...old,
      userMessage,
    ]);

    setChatInput("");
    setChatLoading(true);

    /*
      ---------------------------------------------------------
      REAL AI BACKEND
      ---------------------------------------------------------

      When you create your backend, send:

      POST /api/chat

      {
        message,
        language,
        user,
        department,
        selectedScheme,
        eligibility
      }

      The backend should return:

      {
        answer: "..."
      }

      The API key must stay in the backend.

      Until the backend exists, the application uses the
      local SchemeSaathi assistant below.
    */

    try {
      const response = await fetch(
        "/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            message: question,
            language,
            user,
            department,
            selectedScheme,
            eligibility:
              selectedScheme
                ? getStatus(selectedScheme)
                : null,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Backend unavailable"
        );
      }

      const data = await response.json();

      setMessages((old) => [
        ...old,
        {
          role: "assistant",
          text:
            data.answer ||
            buildLocalAIResponse(question),
        },
      ]);
    } catch {
      /*
        Local fallback.
        This makes the chatbot usable even before
        the AI backend is connected.
      */

      setTimeout(() => {
        setMessages((old) => [
          ...old,
          {
            role: "assistant",
            text: buildLocalAIResponse(
              question
            ),
          },
        ]);

        setChatLoading(false);
      }, 500);

      return;
    }

    setChatLoading(false);
  }

  function clearChat() {
    setMessages([
      {
        role: "assistant",
        text: t("assistantIntro"),
      },
    ]);
  }

  /* =========================================================
     CSS
  ========================================================= */

  const css = `
    * {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      font-family:
        Inter,
        Arial,
        sans-serif;
      background: #faf8f5;
      color: #29483e;
    }

    button,
    input,
    select,
    textarea {
      font: inherit;
    }

    button {
      cursor: pointer;
    }

    .app {
      min-height: 100vh;
      background:
        radial-gradient(
          circle at 90% 5%,
          #f8e4e9,
          transparent 28%
        ),
        radial-gradient(
          circle at 5% 90%,
          #e2f2eb,
          transparent 30%
        ),
        #faf8f5;
    }

    .header {
      min-height: 76px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding: 12px 7%;
      background: rgba(255,255,255,.94);
      border-bottom: 1px solid #e7e1dc;
      position: sticky;
      top: 0;
      z-index: 50;
      backdrop-filter: blur(12px);
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 21px;
      font-weight: 900;
    }

    .logoIcon {
      width: 43px;
      height: 43px;
      border-radius: 14px;
      background: #dcefe7;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 23px;
    }

    .headerRight {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .languageBox {
      display: flex;
      align-items: center;
      gap: 7px;
      background: #f6f8f6;
      border: 1px solid #dce3df;
      padding: 7px 10px;
      border-radius: 12px;
    }

    .languageBox select {
      border: none;
      background: transparent;
      outline: none;
      color: #345c4e;
      font-weight: 700;
    }

    .step {
      color: #78847f;
      font-size: 14px;
    }

    .page {
      min-height: calc(100vh - 76px);
      padding: 55px 0;
    }

    .container {
      width: min(1150px, 92%);
      margin: auto;
    }

    .primary {
      border: none;
      padding: 15px 24px;
      border-radius: 15px;
      background: #4e866f;
      color: white;
      font-weight: 800;
      box-shadow: 0 10px 25px rgba(78,134,111,.2);
      transition: .2s;
    }

    .primary:hover {
      transform: translateY(-2px);
    }

    .secondary {
      border: 1px solid #d8dfdb;
      background: white;
      padding: 12px 18px;
      border-radius: 13px;
      color: #46695c;
      font-weight: 800;
    }

    .back {
      border: none;
      background: transparent;
      color: #54796b;
      font-weight: 800;
      margin-bottom: 25px;
    }

    .welcome {
      max-width: 850px;
      margin: auto;
      text-align: center;
      padding-top: 80px;
    }

    .welcomeIcon {
      width: 95px;
      height: 95px;
      margin: auto;
      border-radius: 32px;
      background: #dcefe7;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 48px;
    }

    .welcome h1 {
      font-size: clamp(43px, 7vw, 75px);
      line-height: 1;
      letter-spacing: -4px;
      margin: 28px 0 20px;
    }

    .welcome h2 {
      color: #a86f79;
      font-size: 21px;
    }

    .welcome p {
      max-width: 650px;
      margin: 20px auto;
      color: #718079;
      line-height: 1.7;
    }

    .card {
      max-width: 720px;
      margin: auto;
      background: rgba(255,255,255,.94);
      border: 1px solid #e4dfda;
      border-radius: 28px;
      padding: 35px;
      box-shadow: 0 18px 50px rgba(40,60,50,.07);
    }

    .card h1 {
      margin: 0;
      font-size: 35px;
    }

    .subtitle {
      color: #75817c;
      line-height: 1.6;
    }

    .field {
      margin-top: 22px;
    }

    label {
      display: block;
      font-weight: 800;
      margin-bottom: 8px;
    }

    .input,
    .select {
      width: 100%;
      padding: 15px;
      border-radius: 14px;
      border: 1px solid #d9dfdb;
      background: #fcfdfc;
      outline: none;
    }

    .input:focus,
    .select:focus,
    .chatInput:focus {
      border-color: #73a68f;
      box-shadow: 0 0 0 3px rgba(115,166,143,.12);
    }

    .genderGrid {
      display: grid;
      grid-template-columns: repeat(3,1fr);
      gap: 12px;
    }

    .gender {
      border: 1px solid #d9dfdb;
      background: white;
      padding: 14px;
      border-radius: 14px;
      font-weight: 800;
    }

    .gender.selected {
      background: #dcefe7;
      border-color: #73a68f;
    }

    .full {
      width: 100%;
      margin-top: 25px;
    }

    .title {
      font-size: 43px;
      margin: 0;
      letter-spacing: -1px;
    }

    .description {
      color: #74807b;
      margin-bottom: 30px;
    }

    .departmentGrid {
      display: grid;
      grid-template-columns: repeat(3,1fr);
      gap: 18px;
    }

    .department {
      border: 1px solid #e3ded8;
      background: white;
      border-radius: 23px;
      padding: 25px;
      text-align: left;
      transition: .2s;
    }

    .department:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(40,60,50,.1);
    }

    .deptIcon {
      width: 58px;
      height: 58px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #edf5f1;
      border-radius: 17px;
      font-size: 28px;
      margin-bottom: 18px;
    }

    .deptName {
      font-size: 19px;
      font-weight: 900;
    }

    .deptDescription {
      color: #75817c;
      font-size: 14px;
      margin-top: 7px;
      line-height: 1.5;
    }

    .dashboardHeader {
      display: flex;
      justify-content: space-between;
      align-items: end;
      gap: 20px;
      margin-bottom: 25px;
    }

    .dashboardHeader h1 {
      margin: 0;
      font-size: 42px;
    }

    .location {
      color: #77837e;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(4,1fr);
      gap: 14px;
      margin-bottom: 20px;
    }

    .stat {
      background: white;
      border: 1px solid #e4dfda;
      border-radius: 20px;
      padding: 20px;
    }

    .statNumber {
      font-size: 32px;
      font-weight: 900;
    }

    .statLabel {
      color: #78837f;
      font-size: 13px;
      margin-top: 4px;
    }

    .green {
      color: #478368;
    }

    .yellow {
      color: #a17a37;
    }

    .red {
      color: #aa626a;
    }

    .blue {
      color: #5e7892;
    }

    .toolbar {
      display: flex;
      gap: 10px;
      margin-bottom: 22px;
    }

    .search {
      flex: 1;
      padding: 14px;
      border-radius: 13px;
      border: 1px solid #ded9d4;
      background: white;
      outline: none;
    }

    .filter {
      border: 1px solid #ded9d4;
      background: white;
      padding: 0 15px;
      border-radius: 13px;
    }

    .schemeGrid {
      display: grid;
      grid-template-columns: repeat(2,1fr);
      gap: 18px;
    }

    .scheme {
      background: white;
      border: 1px solid #e4dfda;
      border-radius: 23px;
      padding: 23px;
    }

    .schemeTop {
      display: flex;
      justify-content: space-between;
      gap: 15px;
    }

    .schemeName {
      font-size: 20px;
      font-weight: 900;
    }

    .status {
      padding: 7px 10px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 900;
      white-space: nowrap;
      height: fit-content;
    }

    .applicable {
      background: #def0e6;
      color: #397259;
    }

    .possible {
      background: #fff0cf;
      color: #97712e;
    }

    .notApplicable {
      background: #f7dfe2;
      color: #a45f66;
    }

    .benefit {
      color: #66746e;
      line-height: 1.6;
      margin: 18px 0;
      font-size: 14px;
    }

    .view {
      border: none;
      background: #edf5f1;
      color: #386957;
      padding: 10px 15px;
      border-radius: 11px;
      font-weight: 900;
    }

    .details {
      max-width: 850px;
      margin: auto;
      background: white;
      border: 1px solid #e4dfda;
      border-radius: 27px;
      padding: 35px;
    }

    .details h1 {
      font-size: 38px;
      margin: 0;
    }

    .section {
      margin-top: 24px;
      padding: 20px;
      border-radius: 18px;
      background: #f6f8f6;
    }

    .section h3 {
      margin-top: 0;
    }

    .section p {
      color: #687670;
      line-height: 1.7;
    }

    .gapItem {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 9px 0;
    }

    .priority {
      display: inline-block;
      background: #f3e8d7;
      color: #8b6934;
      padding: 6px 10px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 900;
    }

    .familyGraph {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 20px;
    }

    .node {
      background: white;
      border: 1px solid #dfe5e1;
      padding: 13px 15px;
      border-radius: 14px;
      text-align: center;
      font-size: 13px;
      font-weight: 800;
    }

    .arrow {
      color: #799086;
      font-weight: 900;
    }

    .official {
      display: inline-block;
      text-decoration: none;
      background: #4e866f;
      color: white;
      padding: 13px 18px;
      border-radius: 12px;
      font-weight: 900;
      margin-top: 10px;
    }

    .notice {
      font-size: 12px;
      color: #7d8783;
      line-height: 1.6;
    }

    /* =======================================================
       CHATBOT
    ======================================================= */

    .chatButton {
      position: fixed;
      right: 25px;
      bottom: 25px;
      z-index: 100;
      border: none;
      background: #4e866f;
      color: white;
      width: 65px;
      height: 65px;
      border-radius: 50%;
      font-size: 27px;
      box-shadow: 0 12px 35px rgba(40,70,55,.25);
      transition: .2s;
    }

    .chatButton:hover {
      transform: scale(1.07);
    }

    .chatWindow {
      position: fixed;
      right: 25px;
      bottom: 105px;
      width: min(410px, calc(100vw - 30px));
      height: 600px;
      max-height: calc(100vh - 130px);
      background: white;
      border: 1px solid #e1ddd8;
      border-radius: 25px;
      box-shadow: 0 25px 70px rgba(30,50,40,.20);
      z-index: 99;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .chatHeader {
      padding: 17px;
      background: #e2f2eb;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }

    .chatTitle {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 900;
    }

    .botAvatar {
      width: 42px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: white;
      border-radius: 14px;
      font-size: 22px;
    }

    .chatHeaderButtons {
      display: flex;
      gap: 5px;
    }

    .chatHeaderButton {
      border: none;
      background: rgba(255,255,255,.75);
      width: 32px;
      height: 32px;
      border-radius: 9px;
    }

    .chatMessages {
      flex: 1;
      padding: 15px;
      overflow-y: auto;
      background: #fcfbf9;
    }

    .message {
      display: flex;
      margin-bottom: 13px;
    }

    .message.user {
      justify-content: flex-end;
    }

    .bubble {
      max-width: 84%;
      padding: 12px 14px;
      border-radius: 17px;
      line-height: 1.55;
      font-size: 14px;
      white-space: pre-wrap;
      word-break: break-word;
    }

    .message.assistant .bubble {
      background: #edf5f1;
      color: #315548;
      border-bottom-left-radius: 5px;
    }

    .message.user .bubble {
      background: #4e866f;
      color: white;
      border-bottom-right-radius: 5px;
    }

    .quickArea {
      padding: 10px 13px 5px;
      border-top: 1px solid #eee8e2;
      background: white;
    }

    .quickTitle {
      font-size: 11px;
      color: #7d8783;
      margin-bottom: 7px;
      font-weight: 800;
    }

    .quickQuestions {
      display: flex;
      gap: 6px;
      overflow-x: auto;
      padding-bottom: 5px;
    }

    .quick {
      flex: 0 0 auto;
      border: 1px solid #dce4df;
      background: #f8faf8;
      color: #426657;
      padding: 7px 9px;
      border-radius: 10px;
      font-size: 11px;
      font-weight: 700;
    }

    .chatInputArea {
      display: flex;
      gap: 7px;
      padding: 12px;
      border-top: 1px solid #e9e4df;
      background: white;
    }

    .chatInput {
      flex: 1;
      border: 1px solid #d9dfdb;
      border-radius: 13px;
      padding: 12px;
      outline: none;
      resize: none;
    }

    .sendButton {
      border: none;
      background: #4e866f;
      color: white;
      width: 48px;
      border-radius: 13px;
      font-size: 18px;
    }

    .typing {
      color: #78847f;
      font-size: 12px;
      font-style: italic;
      padding: 5px;
    }

    @media(max-width:850px) {
      .departmentGrid,
      .schemeGrid {
        grid-template-columns: 1fr;
      }

      .stats {
        grid-template-columns: repeat(2,1fr);
      }

      .dashboardHeader {
        display: block;
      }
    }

    @media(max-width:550px) {
      .header {
        padding: 10px 4%;
      }

      .headerRight {
        gap: 7px;
      }

      .step {
        display: none;
      }

      .languageBox {
        max-width: 145px;
      }

      .stats {
        grid-template-columns: 1fr;
      }

      .toolbar {
        flex-direction: column;
      }

      .filter {
        padding: 13px;
      }

      .genderGrid {
        grid-template-columns: 1fr;
      }

      .welcome {
        padding-top: 40px;
      }

      .welcome h1 {
        letter-spacing: -2px;
      }

      .chatWindow {
        right: 10px;
        bottom: 90px;
        width: calc(100vw - 20px);
        height: 570px;
      }

      .chatButton {
        right: 17px;
        bottom: 17px;
      }
    }
  `;

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <div className="app">
      <style>{css}</style>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="header">
        <div className="logo">
          <div className="logoIcon">
            🌿
          </div>

          SchemeSaathi 2.0
        </div>

        <div className="headerRight">
          <div className="languageBox">
            🌐

            <select
              value={language}
              onChange={(e) =>
                setLanguage(e.target.value)
              }
              aria-label={t("language")}
            >
              {languages.map((item) => (
                <option
                  key={item.code}
                  value={item.code}
                >
                  {item.native}
                </option>
              ))}
            </select>
          </div>

          <div className="step">
            {step === "welcome" &&
              t("welcomeStep")}

            {step === "details" &&
              t("details")}

            {step === "department" &&
              t("departmentStep")}

            {step === "dashboard" &&
              t("dashboard")}

            {step === "detailsScheme" &&
              t("schemeDetails")}
          </div>
        </div>
      </header>

      {/* =====================================================
          WELCOME
      ===================================================== */}

      {step === "welcome" && (
        <main className="page">
          <div className="container">
            <section className="welcome">
              <div className="welcomeIcon">
                🌱
              </div>

              <h1>
                {t("welcome")}
              </h1>

              <h2>
                {t("tagline")}
              </h2>

              <p>
                {t("intro")}
              </p>

              <button
                className="primary"
                onClick={() =>
                  setStep("details")
                }
              >
                {t("find")} →
              </button>
            </section>
          </div>
        </main>
      )}

      {/* =====================================================
          PERSONAL DETAILS
      ===================================================== */}

      {step === "details" && (
        <main className="page">
          <div className="container">
            <button
              className="back"
              onClick={() =>
                setStep("welcome")
              }
            >
              ← {t("back")}
            </button>

            <div className="card">
              <h1>{t("tell")}</h1>

              <p className="subtitle">
                {t("basic")}
              </p>

              <div className="field">
                <label>
                  {t("name")}{" "}
                  <span
                    style={{
                      color: "#999",
                      fontWeight: 400,
                    }}
                  >
                    ({t("optional")})
                  </span>
                </label>

                <input
                  className="input"
                  placeholder={t("name")}
                  value={user.name}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      name: e.target.value,
                    })
                  }
                />
              </div>

              <div className="field">
                <label>
                  {t("state")} *
                </label>

                <select
                  className="select"
                  value={user.state}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      state: e.target.value,
                    })
                  }
                >
                  <option value="">
                    {t("selectState")}
                  </option>

                  {states.map((state) => (
                    <option
                      key={state}
                      value={state}
                    >
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label>
                  {t("age")} *
                </label>

                <input
                  className="input"
                  type="number"
                  min="1"
                  max="120"
                  placeholder={t("age")}
                  value={user.age}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      age: e.target.value,
                    })
                  }
                />
              </div>

              <div className="field">
                <label>
                  {t("gender")} *
                </label>

                <div className="genderGrid">
                  {[
                    {
                      value: "Male",
                      label: t("male"),
                    },
                    {
                      value: "Female",
                      label: t("female"),
                    },
                    {
                      value: "Other",
                      label: t("other"),
                    },
                  ].map((gender) => (
                    <button
                      key={gender.value}
                      className={`gender ${
                        user.gender ===
                        gender.value
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        setUser({
                          ...user,
                          gender:
                            gender.value,
                        })
                      }
                    >
                      {gender.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="field">
                <label>
                  {t("occupation")}
                </label>

                <input
                  className="input"
                  placeholder={t(
                    "occupationPlaceholder"
                  )}
                  value={user.occupation}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      occupation:
                        e.target.value,
                    })
                  }
                />
              </div>

              <div className="field">
                <label>
                  {t("income")}
                </label>

                <select
                  className="select"
                  value={user.income}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      income:
                        e.target.value,
                    })
                  }
                >
                  <option value="">
                    {t("selectIncome")}
                  </option>

                  <option value="Below 10000">
                    Below ₹10,000
                  </option>

                  <option value="10000-25000">
                    ₹10,000 – ₹25,000
                  </option>

                  <option value="25000-50000">
                    ₹25,000 – ₹50,000
                  </option>

                  <option value="Above 50000">
                    Above ₹50,000
                  </option>
                </select>
              </div>

              <div className="field">
                <label>
                  {t("family")}
                </label>

                <select
                  className="select"
                  value={user.familySize}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      familySize:
                        e.target.value,
                    })
                  }
                >
                  <option value="">
                    {t("selectFamily")}
                  </option>

                  {[1,2,3,4,5,6,7,8].map(
                    (number) => (
                      <option
                        key={number}
                        value={number}
                      >
                        {number}{" "}
                        {number === 1
                          ? t("member")
                          : t("members")}
                      </option>
                    )
                  )}
                </select>
              </div>

              <button
                className="primary full"
                onClick={continueDetails}
              >
                {t("continue")} →
              </button>
            </div>
          </div>
        </main>
      )}

      {/* =====================================================
          DEPARTMENT
      ===================================================== */}

      {step === "department" && (
        <main className="page">
          <div className="container">
            <button
              className="back"
              onClick={() =>
                setStep("details")
              }
            >
              ← {t("back")}
            </button>

            <h1 className="title">
              {t("whatNeed")}
            </h1>

            <p className="description">
              {t("chooseField")}
            </p>

            <div className="departmentGrid">
              {departments.map((item) => (
                <button
                  key={item.name}
                  className="department"
                  onClick={() =>
                    chooseDepartment(
                      item.name
                    )
                  }
                >
                  <div className="deptIcon">
                    {item.icon}
                  </div>

                  <div className="deptName">
                    {item.name}
                  </div>

                  <div className="deptDescription">
                    {item.description}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </main>
      )}

      {/* =====================================================
          DASHBOARD
      ===================================================== */}

      {step === "dashboard" && (
        <main className="page">
          <div className="container">
            <button
              className="back"
              onClick={() =>
                setStep("department")
              }
            >
              ← {t("changeDepartment")}
            </button>

            <div className="dashboardHeader">
              <div>
                <h1>
                  {department}
                </h1>

                <p className="location">
                  {user.state} · {t("age")}{" "}
                  {user.age} ·{" "}
                  {user.gender}
                </p>
              </div>
            </div>

            <div className="stats">
              <div className="stat">
                <div className="statNumber blue">
                  {departmentSchemes.length}
                </div>

                <div className="statLabel">
                  {t("schemesScreened")}
                </div>
              </div>

              <div className="stat">
                <div className="statNumber green">
                  {applicable}
                </div>

                <div className="statLabel">
                  {t("applicable")}
                </div>
              </div>

              <div className="stat">
                <div className="statNumber yellow">
                  {possible}
                </div>

                <div className="statLabel">
                  {t("possible")}
                </div>
              </div>

              <div className="stat">
                <div className="statNumber red">
                  {notApplicable}
                </div>

                <div className="statLabel">
                  {t("notApplicable")}
                </div>
              </div>
            </div>

            <div className="toolbar">
              <input
                className="search"
                placeholder={`${t(
                  "search"
                )}`}
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
              />

              <select
                className="filter"
                value={filter}
                onChange={(e) =>
                  setFilter(
                    e.target.value
                  )
                }
              >
                <option value="All">
                  {t("all")}
                </option>

                <option value="Applicable">
                  {t("applicable")}
                </option>

                <option value="Possibly Applicable">
                  {t("possible")}
                </option>

                <option value="Not Applicable">
                  {t("notApplicable")}
                </option>
              </select>
            </div>

            <div className="schemeGrid">
              {filteredSchemes.map(
                (scheme) => {
                  const status =
                    getStatus(scheme);

                  return (
                    <div
                      className="scheme"
                      key={scheme.id}
                    >
                      <div className="schemeTop">
                        <div>
                          <div className="schemeName">
                            {scheme.name}
                          </div>

                          <span className="priority">
                            {scheme.impact} Impact
                          </span>
                        </div>

                        <span
                          className={statusClass(
                            status
                          )}
                        >
                          {status ===
                          "Applicable"
                            ? `✓ ${t(
                                "applicable"
                              )}`
                            : status ===
                              "Possibly Applicable"
                            ? `◐ ${t(
                                "possible"
                              )}`
                            : `✕ ${t(
                                "notApplicable"
                              )}`}
                        </span>
                      </div>

                      <p className="benefit">
                        {scheme.benefit}
                      </p>

                      <button
                        className="view"
                        onClick={() => {
                          setSelectedScheme(
                            scheme
                          );

                          setStep(
                            "detailsScheme"
                          );
                        }}
                      >
                        {t(
                          "viewAnalysis"
                        )} →
                      </button>
                    </div>
                  );
                }
              )}
            </div>

            {filteredSchemes.length ===
              0 && (
              <div
                className="card"
                style={{
                  marginTop: "25px",
                  textAlign: "center",
                }}
              >
                <h3>
                  {t("noSchemes")}
                </h3>

                <p className="subtitle">
                  {t("tryAgain")}
                </p>
              </div>
            )}

            <p className="notice">
              {t("notice")}
            </p>
          </div>
        </main>
      )}

      {/* =====================================================
          SCHEME DETAILS
      ===================================================== */}

      {step === "detailsScheme" &&
        selectedScheme && (
          <main className="page">
            <div className="container">
              <button
                className="back"
                onClick={() =>
                  setStep("dashboard")
                }
              >
                ← {t("dashboard")}
              </button>

              <div className="details">
                <div className="schemeTop">
                  <div>
                    <h1>
                      {selectedScheme.name}
                    </h1>

                    <p className="location">
                      {
                        selectedScheme.department
                      }{" "}
                      ·{" "}
                      {selectedScheme.state}
                    </p>
                  </div>

                  <span
                    className={statusClass(
                      getStatus(
                        selectedScheme
                      )
                    )}
                  >
                    {getStatus(
                      selectedScheme
                    )}
                  </span>
                </div>

                <div className="section">
                  <h3>
                    💰 {t("benefit")}
                  </h3>

                  <p>
                    {
                      selectedScheme.benefit
                    }
                  </p>
                </div>

                <div className="section">
                  <h3>
                    🔍 {t(
                      "explanation"
                    )}
                  </h3>

                  <p>
                    <strong>
                      {t("yourInfo")}:
                    </strong>
                  </p>

                  <p>
                    {t("state")}:{" "}
                    {user.state}
                    <br />
                    {t("age")}:{" "}
                    {user.age}
                    <br />
                    {t("gender")}:{" "}
                    {user.gender}
                    <br />
                    {t("occupation")}:{" "}
                    {user.occupation ||
                      "Not provided"}
                    <br />
                    {t("income")}:{" "}
                    {user.income ||
                      "Not provided"}
                  </p>

                  <p>
                    <strong>
                      {t("criteria")}:
                    </strong>
                  </p>

                  <p>
                    {
                      selectedScheme.eligibility
                    }
                  </p>

                  <p>
                    <strong>
                      {t("result")}:
                    </strong>{" "}
                    {getStatus(
                      selectedScheme
                    )}
                  </p>
                </div>

                <div className="section">
                  <h3>
                    🔎 {t("gap")}
                  </h3>

                  <p>
                    {t("gapText")}
                  </p>

                  <div className="gapItem">
                    ✓{" "}
                    {t(
                      "selectedDepartment"
                    )}
                    : {department}
                  </div>

                  <div className="gapItem">
                    ✓{" "}
                    {t("relevantScheme")}
                  </div>

                  <div className="gapItem">
                    ✓{" "}
                    {t(
                      "guideAvailable"
                    )}
                  </div>
                </div>

                <div className="section">
                  <h3>
                    🏆 {t("optimizer")}
                  </h3>

                  <p>
                    {t("optimizerText")}
                  </p>

                  <div className="gapItem">
                    <span className="priority">
                      {t("priority")}
                    </span>

                    {
                      selectedScheme.priority
                    }
                    /100
                  </div>

                  <p>
                    <strong>
                      {t(
                        "recommendation"
                      )}
                      :
                    </strong>{" "}
                    {selectedScheme.priority >=
                    90
                      ? t("high")
                      : t("moderate")}{" "}
                    priority.
                  </p>
                </div>

                <div className="section">
                  <h3>
                    👨‍👩‍👧{" "}
                    {t(
                      "familyGraph"
                    )}
                  </h3>

                  <p>
                    {t("familyText")}
                  </p>

                  <div className="familyGraph">
                    <div className="node">
                      👨‍👩‍👧
                      <br />
                      {t("family")}
                    </div>

                    <div className="arrow">
                      →
                    </div>

                    <div className="node">
                      👤
                      <br />
                      {t("you")}
                    </div>

                    <div className="arrow">
                      →
                    </div>

                    <div className="node">
                      🌾
                      <br />
                      {department}
                    </div>

                    <div className="arrow">
                      →
                    </div>

                    <div className="node">
                      🏛️
                      <br />
                      {t("scheme")}
                    </div>
                  </div>
                </div>

                <div className="section">
                  <h3>
                    📋{" "}
                    {t("application")}
                  </h3>

                  <p>
                    {
                      selectedScheme.application
                    }
                  </p>

                  <p>
                    <strong>
                      {t(
                        "information"
                      )}
                      :
                    </strong>
                  </p>

                  <p>
                    {t("noDocuments")}
                  </p>

                  <a
                    className="official"
                    href={
                      selectedScheme.website
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t(
                      "official"
                    )} ↗
                  </a>
                </div>
              </div>
            </div>
          </main>
        )}

      {/* =====================================================
          AI ASSISTANT
      ===================================================== */}

      <button
        className="chatButton"
        onClick={() =>
          setChatOpen(!chatOpen)
        }
        aria-label={t("assistant")}
      >
        {chatOpen ? "×" : "🤖"}
      </button>

      {chatOpen && (
        <div className="chatWindow">
          <div className="chatHeader">
            <div className="chatTitle">
              <div className="botAvatar">
                🤖
              </div>

              <div>
                <div>
                  {t("assistant")}
                </div>

                <small>
                  🌐{" "}
                  {
                    languages.find(
                      (x) =>
                        x.code ===
                        language
                    )?.native
                  }
                </small>
              </div>
            </div>

            <div className="chatHeaderButtons">
              <button
                className="chatHeaderButton"
                onClick={clearChat}
                title={t("clear")}
              >
                ↻
              </button>

              <button
                className="chatHeaderButton"
                onClick={() =>
                  setChatOpen(false)
                }
                title={t("close")}
              >
                ×
              </button>
            </div>
          </div>

          <div className="chatMessages">
            {messages.map(
              (message, index) => (
                <div
                  key={index}
                  className={`message ${message.role}`}
                >
                  <div className="bubble">
                    {message.text}
                  </div>
                </div>
              )
            )}

            {chatLoading && (
              <div className="typing">
                🤖 {t("thinking")}
              </div>
            )}
          </div>

          <div className="quickArea">
            <div className="quickTitle">
              {t("quickQuestions")}
            </div>

            <div className="quickQuestions">
              <button
                className="quick"
                onClick={() =>
                  sendMessage(
                    t("whyNot")
                  )
                }
              >
                {t("whyNot")}
              </button>

              <button
                className="quick"
                onClick={() =>
                  sendMessage(
                    t("howApply")
                  )
                }
              >
                {t("howApply")}
              </button>

              <button
                className="quick"
                onClick={() =>
                  sendMessage(
                    t(
                      "benefitQuestion"
                    )
                  )
                }
              >
                {t(
                  "benefitQuestion"
                )}
              </button>

              <button
                className="quick"
                onClick={() =>
                  sendMessage(
                    t("whichFirst")
                  )
                }
              >
                {t("whichFirst")}
              </button>
            </div>
          </div>

          <div className="chatInputArea">
            <textarea
              className="chatInput"
              rows="1"
              placeholder={t("ask")}
              value={chatInput}
              onChange={(e) =>
                setChatInput(
                  e.target.value
                )
              }
              onKeyDown={(e) => {
                if (
                  e.key === "Enter" &&
                  !e.shiftKey
                ) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
            />

            <button
              className="sendButton"
              onClick={() =>
                sendMessage()
              }
              disabled={chatLoading}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}