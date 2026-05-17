const coaches = [
  {
    id: "li",
    nameCn: "李政翰",
    nameEn: "Li Zhenghan",
    initials: "李",
    titleCn: "竞技武术套路教练",
    titleEn: "Competitive Wushu Forms Coach",
    yearsCn: "一级运动员",
    yearsEn: "National First-Class Athlete",
    price: "¥420/节",
    specialties: ["竞技武术套路 Competitive Wushu", "长拳 Long Fist", "刀术 Broadsword", "棍术 Staff", "翻子拳 Fanziquan"],
    focusCn: "现北京队武术队队员，主攻竞技武术套路，擅长长拳、刀术、棍术与翻子拳。课程强调动作规格、速度节奏、腾空质量和成套表现力。",
    focusEn: "Current Beijing Wushu Team athlete specializing in competitive forms, long fist, broadsword, staff, and Fanziquan.",
    certificationCn: "2018年全国青少年武术套路锦标赛暨世界青少年选拔赛棍术第一名；2020年全国中学生武术锦标赛暨第十八届世界中学生运动会武术项目长拳第一名；2024年首都高等学校武术套路比赛长拳、刀术、棍术第一名；2024年全国大学生武术套路锦标赛丁组刀术第二名；2025年全国大学生武术套路锦标赛丁组翻子拳第一名。",
    certificationEn: "Beijing Wushu Team athlete with first-place results in staff, long fist, broadsword, and Fanziquan events; national university broadsword runner-up.",
    achievements: [
      "现北京队武术队队员 · 一级运动员",
      "2018年全国青少年武术套路锦标赛暨世界青少年选拔赛：棍术第一名",
      "2020年全国中学生武术锦标赛暨第十八届世界中学生运动会武术项目：长拳第一名",
      "2024年首都高等学校武术套路比赛：长拳、刀术、棍术第一名",
      "2024年全国大学生武术套路锦标赛丁组：刀术第二名",
      "2025年全国大学生武术套路锦标赛丁组：翻子拳第一名"
    ],
    photo: "assets/li-zhenghan-photo.jpg",
    photoClass: "li",
    schedule: {
      0: ["10:30", "15:30", "19:30"],
      1: ["09:30", "14:30", "20:00"],
      2: ["10:00", "16:00", "19:30"],
      3: ["09:30", "15:30", "20:00"],
      4: ["10:30", "16:00", "19:30"],
      5: ["09:00", "11:00", "15:30"],
      6: ["09:30", "14:00", "16:30"]
    },
    videos: [
      { titleCn: "李政翰介绍视频", titleEn: "Li Zhenghan Introduction", topicCn: "北京队队员、一级运动员、竞技武术套路展示", topicEn: "Beijing Wushu Team athlete and competitive forms introduction", duration: "Intro 01", src: "assets/li-zhenghan-intro-1-balanced.mp4", poster: "assets/li-zhenghan-photo.jpg" },
      { titleCn: "李政翰训练介绍", titleEn: "Training Introduction", topicCn: "长拳、刀术、棍术与翻子拳专项能力展示", topicEn: "Long fist, broadsword, staff, and Fanziquan training showcase", duration: "Intro 02", src: "assets/li-zhenghan-intro-2-balanced.mp4", poster: "assets/li-zhenghan-photo.jpg" }
    ]
  },
  {
    id: "zhu",
    nameCn: "朱万博",
    nameEn: "Zhu Wanbo",
    initials: "朱",
    titleCn: "南拳与器械套路教练",
    titleEn: "Nanquan & Weapons Forms Coach",
    yearsCn: "国家级运动健将 · 中国武术六段",
    yearsEn: "National Elite Athlete · Wushu 6th Duan",
    price: "¥420/节",
    specialties: ["竞技武术套路 Competitive Wushu", "南拳 Nanquan", "南刀 Nandao", "南棍 Nangun", "朴刀 Pudao", "形意拳 Xingyiquan"],
    focusCn: "现役北京武术专业队一线队员，就读于北京211高校体育学院运动训练专业硕士研究生。深耕武术套路领域多年，兼具专业竞技、高校深造与武术传承背景，擅长南拳、南刀、南棍、朴刀与形意拳专项训练。",
    focusEn: "Active Beijing professional Wushu team athlete and master's student in sports training, specializing in Nanquan, Nandao, Nangun, Pudao, and Xingyiquan.",
    certificationCn: "国家级运动健将；中国武术六段；北京武术专业队一线队员；北京211高校体育学院运动训练专业硕士研究生。",
    certificationEn: "National Elite Athlete, Wushu 6th Duan, active Beijing professional team athlete, and master's student in sports training.",
    achievements: [
      "国家级运动健将 · 中国武术六段",
      "现役北京武术专业队一线队员",
      "北京211高校体育学院运动训练专业硕士研究生",
      "2021年第十四届中华人民共和国全国运动会武术套路项目：团体第六名",
      "2014年北京市第十四届运动会：刀术第一名、棍术第一名、对练第二名、拳术第三名",
      "2017年北京市武术套路锦标赛：南拳第一名、南刀第一名",
      "2018年全国武术套路青少年锦标赛：南拳第四名",
      "2018年北京莫斯科国际交流赛：南拳第一名、南棍第一名",
      "2023年全国大学生武术套路锦标赛：朴刀第三名、形意拳第三名"
    ],
    photo: "assets/zhu-wanbo-action-photo.jpg",
    photoClass: "zhu",
    schedule: {
      0: ["10:00", "14:30", "19:30"],
      1: ["09:30", "15:30", "20:00"],
      2: ["10:30", "16:00", "19:30"],
      3: ["09:30", "14:30", "20:00"],
      4: ["10:00", "15:30", "19:30"],
      5: ["09:30", "11:30", "16:00"],
      6: ["10:00", "14:00", "16:30"]
    },
    videos: [
      { titleCn: "朱万博精彩片段", titleEn: "Zhu Wanbo Highlight", topicCn: "南拳专项高密度动作展示，约20秒精彩片段", topicEn: "High-energy Nanquan forms highlight, about 20 seconds", duration: "00:20", src: "assets/zhu-wanbo-highlight-20s.mp4", poster: "assets/zhu-wanbo-highlight-poster.jpg" },
      { titleCn: "朱万博器械专项", titleEn: "Weapons & Traditional Forms", topicCn: "朴刀、形意拳与竞技套路进阶训练", topicEn: "Pudao, Xingyiquan, and advanced competitive forms", duration: "Intro 02", src: "assets/zhu-wanbo-intro-2-standard.mp4", poster: "assets/zhu-wanbo-action-photo.jpg" }
    ]
  },
  {
    id: "guo",
    nameCn: "郭子嘉",
    nameEn: "Guo Zijia",
    initials: "郭",
    titleCn: "太极拳与形意拳冠军教练",
    titleEn: "Tai Chi & Xingyiquan Champion Coach",
    yearsCn: "全国武术冠军 · 国家级健将",
    yearsEn: "National Wushu Champion · National Elite Athlete",
    price: "¥420/节",
    specialties: ["太极拳 Tai Chi", "形意拳 Xingyiquan", "传统套路 Traditional Forms", "竞技武术套路 Competitive Wushu"],
    focusCn: "北京武术队现役运动员，全国武术冠军、国家级健将，主项太极拳与形意拳。课程适合想提升太极拳套路规格、传统拳种表现力和赛事质量的学员。",
    focusEn: "Active Beijing Wushu Team athlete and national champion specializing in Tai Chi and Xingyiquan for competition-level form quality.",
    certificationCn: "北京武术队现役运动员；全国武术冠军；国家级健将；主项太极拳、形意拳。",
    certificationEn: "Active Beijing Wushu Team athlete, national Wushu champion, National Elite Athlete, specializing in Tai Chi and Xingyiquan.",
    achievements: [
      "北京武术队现役运动员",
      "全国武术冠军 · 国家级健将",
      "主项：太极拳、形意拳",
      "2018年全国武术套路冠军赛传统赛区：男子形意拳第一名",
      "2023年全国武术套路冠军赛传统赛区：男子形意拳第一名",
      "2025年全国武术套路锦标赛太极拳赛区：男子自选太极拳第一名"
    ],
    photo: "assets/guo-zijia-photo.jpg",
    photoClass: "guo",
    schedule: {
      0: ["10:30", "15:00", "19:30"],
      1: ["09:30", "14:30", "20:00"],
      2: ["10:00", "16:00", "19:30"],
      3: ["09:30", "15:30", "20:00"],
      4: ["10:30", "16:00", "19:30"],
      5: ["09:30", "11:30", "15:30"],
      6: ["10:00", "14:30", "16:30"]
    },
    videos: [
      { titleCn: "郭子嘉演示视频", titleEn: "Guo Zijia Demonstration", topicCn: "太极拳与形意拳专项动作展示，完整约47秒", topicEn: "Tai Chi and Xingyiquan movement demonstration, about 47 seconds", duration: "00:47", src: "assets/guo-zijia-intro-balanced.mp4", poster: "assets/guo-zijia-video-poster.jpg" },
      { titleCn: "郭子嘉形意拳专项", titleEn: "Xingyiquan Champion Profile", topicCn: "形意拳冠军经历与传统套路训练方向", topicEn: "Xingyiquan champion background and traditional forms training focus", duration: "Photo", poster: "assets/guo-zijia-photo.jpg" }
    ]
  },
  {
    id: "zhang",
    nameCn: "张清淳",
    nameEn: "Zhang Qingchun",
    initials: "张",
    titleCn: "剑术、枪术与八卦掌冠军教练",
    titleEn: "Sword, Spear & Baguazhang Champion Coach",
    yearsCn: "国际级武术健将",
    yearsEn: "International Elite Wushu Athlete",
    price: "¥460/节",
    specialties: ["竞技武术套路 Competitive Wushu", "剑术 Sword", "枪术 Spear", "八卦掌 Baguazhang", "传统套路 Traditional Forms"],
    focusCn: "国际级武术健将，主攻剑术、枪术与八卦掌。拥有世界武术锦标赛、武术套路世界杯与全国冠军赛冠军成绩，适合想冲击赛事、提升器械规格和传统拳种表现力的学员。",
    focusEn: "International Elite Wushu Athlete specializing in sword, spear, and Baguazhang, with world championship and world cup titles.",
    certificationCn: "国际级武术健将；世界武术锦标赛枪术冠军；武术套路世界杯枪术冠军；全国武术套路冠军赛八卦掌冠军。",
    certificationEn: "International Elite Wushu Athlete, World Wushu Championships spear champion, Wushu Taolu World Cup spear champion, and national Baguazhang champion.",
    achievements: [
      "国际级武术健将",
      "2014年全国青少年武术套路锦标赛：剑术第一名",
      "2019年全国武术套路冠军赛：八卦掌第三名",
      "2021年第十四届全国运动会：枪术第五名、剑术第五名",
      "2022年全国武术套路锦标赛：剑术第三名、枪术第三名",
      "2023年第十六届世界武术锦标赛：枪术第一名",
      "2024年全国武术套路锦标赛：男子长拳第四名",
      "2024年全国武术套路冠军赛：男子长拳第五名",
      "2024年第三届武术套路世界杯：枪术第一名",
      "2025年全国武术套路冠军赛：八卦掌第一名"
    ],
    photo: "assets/zhang-qingchun-photo.jpg",
    photoClass: "zhang",
    schedule: {
      0: ["10:00", "15:30", "20:00"],
      1: ["09:30", "14:30", "19:30"],
      2: ["10:30", "16:00", "20:00"],
      3: ["09:30", "15:00", "19:30"],
      4: ["10:00", "16:30", "20:00"],
      5: ["09:00", "11:30", "15:30"],
      6: ["10:00", "14:30", "17:00"]
    },
    videos: [
      { titleCn: "张清淳精彩20秒", titleEn: "Zhang Qingchun Highlight", topicCn: "枪术动作高密度精剪，腾空、翻转与落地衔接", topicEn: "High-energy spear highlight with jump, rotation, and landing sequence", duration: "00:20", src: "assets/zhang-qingchun-highlight-20s.mp4", poster: "assets/zhang-qingchun-highlight-poster.jpg" },
      { titleCn: "张清淳剑术与八卦掌", titleEn: "Sword & Baguazhang Focus", topicCn: "剑术规格、八卦掌身法与竞赛套路提升方向", topicEn: "Sword quality, Baguazhang bodywork, and competitive forms development", duration: "Photo", poster: "assets/zhang-qingchun-photo.jpg" }
    ]
  }
];

const liCoachIndex = coaches.findIndex((coach) => coach.id === "li");
const zhangCoachIndex = coaches.findIndex((coach) => coach.id === "zhang");
if (liCoachIndex > -1 && zhangCoachIndex > -1) {
  [coaches[liCoachIndex], coaches[zhangCoachIndex]] = [coaches[zhangCoachIndex], coaches[liCoachIndex]];
}

const professionalCoachIds = new Set(["zhang", "zhu", "guo", "li"]);
for (let index = coaches.length - 1; index >= 0; index -= 1) {
  if (!professionalCoachIds.has(coaches[index].id)) coaches.splice(index, 1);
}

const programs = [
  { nameCn: "竞技武术套路", nameEn: "Competitive Wushu", mark: "竞", descCn: "长拳、刀术、棍术、翻子拳与成套表现力训练，适合赛事准备和专业进阶。", descEn: "Long fist, broadsword, staff, Fanziquan, and competition routine performance.", tags: ["李政翰", "长拳 Long Fist", "刀棍 Staff"] },
  { nameCn: "南拳与南派器械", nameEn: "Nanquan & Southern Weapons", mark: "南", descCn: "南拳、南刀、南棍、朴刀与南派发力体系，适合南派专项提升。", descEn: "Nanquan, Nandao, Nangun, Pudao, and southern power expression.", tags: ["朱万博", "南拳 Nanquan", "南刀南棍"] },
  { nameCn: "太极拳与形意拳", nameEn: "Tai Chi & Xingyiquan", mark: "太", descCn: "太极拳、形意拳与传统套路表现，适合传统项目与赛事质量提升。", descEn: "Tai Chi, Xingyiquan, traditional forms, and competition-level refinement.", tags: ["郭子嘉", "太极 Tai Chi", "形意 Xingyi"] },
  { nameCn: "剑术枪术八卦掌", nameEn: "Sword, Spear & Baguazhang", mark: "剑", descCn: "剑术、枪术、八卦掌与高水平器械套路训练，适合冲击赛事和专项打磨。", descEn: "Sword, spear, Baguazhang, and advanced weapons routine training.", tags: ["张清淳", "剑术 Sword", "枪术 Spear"] }
];

const state = {
  activeFilter: "全部 All",
  selectedCoachId: coaches[0].id,
  selectedDateIndex: 0,
  selectedSlot: "",
  activeVideoCoachId: coaches[0].id,
  bookingSearch: "",
  bookingStatusFilter: "全部",
  bookings: JSON.parse(localStorage.getItem("wushuBookings") || "[]"),
  availabilityBookings: [],
  paymentConfig: null
};

const coachGrid = document.querySelector("#coachGrid");
const videoGrid = document.querySelector("#videoGrid");
const coachFilters = document.querySelector("#coachFilters");
const programGrid = document.querySelector("#programGrid");
const coachSelect = document.querySelector("#coachSelect");
const programSelect = document.querySelector("#programSelect");
const dateStrip = document.querySelector("#dateStrip");
const slotGrid = document.querySelector("#slotGrid");
const selectedCoachBadge = document.querySelector("#selectedCoachBadge");
const bookingForm = document.querySelector("#bookingForm");
const bookingSummary = document.querySelector("#bookingSummary");
const bookingList = document.querySelector("#bookingList");
const bookingStats = document.querySelector("#bookingStats");
const bookingSearch = document.querySelector("#bookingSearch");
const bookingStatusFilter = document.querySelector("#bookingStatusFilter");
const bookingPageBody = document.querySelector("#bookingPageBody");
const postBookingPanel = document.querySelector("#postBookingPanel");
const clearBookings = document.querySelector("#clearBookings");
const copyLatestBooking = document.querySelector("#copyLatestBooking");
const exportBookings = document.querySelector("#exportBookings");
const copyConsultation = document.querySelector("#copyConsultation");
const shareConsultation = document.querySelector("#shareConsultation");
const toast = document.querySelector("#toast");
const videoModal = document.querySelector("#videoModal");
const closeModal = document.querySelector("#closeModal");
const bookFromVideo = document.querySelector("#bookFromVideo");
const playToggle = document.querySelector("#playToggle");
const modalReel = document.querySelector("#modalReel");
const modalPoster = document.querySelector("#modalPoster");
const modalVideo = document.querySelector("#modalVideo");
const modalCoach = document.querySelector("#modalCoach");
const modalTitle = document.querySelector("#modalTitle");
const modalTopic = document.querySelector("#modalTopic");
const modalDuration = document.querySelector("#modalDuration");
const timelineProgress = document.querySelector("#timelineProgress");
const advisorForm = document.querySelector("#advisorForm");
const advisorResult = document.querySelector("#advisorResult");
const advisorName = document.querySelector("#advisorName");
const advisorAge = document.querySelector("#advisorAge");
const advisorGender = document.querySelector("#advisorGender");
const advisorPhone = document.querySelector("#advisorPhone");
const advisorIdCard = document.querySelector("#advisorIdCard");
const guardianName = document.querySelector("#guardianName");
const guardianPhone = document.querySelector("#guardianPhone");
const emergencyName = document.querySelector("#emergencyName");
const emergencyPhone = document.querySelector("#emergencyPhone");
const healthHistory = document.querySelector("#healthHistory");
const riskAcknowledged = document.querySelector("#riskAcknowledged");
const minorSafetyPanel = document.querySelector("#minorSafetyPanel");
const minorSafetyToggle = document.querySelector("#minorSafetyToggle");
const minorSafetyBody = document.querySelector("#minorSafetyBody");
const advisorProgram = document.querySelector("#advisorProgram");
const advisorGoal = document.querySelector("#advisorGoal");
const advisorIdeas = document.querySelector("#advisorIdeas");
const phoneCodeInput = document.querySelector("#phoneCodeInput");
const sendPhoneCode = document.querySelector("#sendPhoneCode");
const verifyPhoneCode = document.querySelector("#verifyPhoneCode");
const phoneVerifyStatus = document.querySelector("#phoneVerifyStatus");
const bookingServiceMode = document.querySelector("#bookingServiceMode");
const bookingAddress = document.querySelector("#bookingAddress");
const homeAddressField = document.querySelector("#homeAddressField");
const supportToggle = document.querySelector("#supportToggle");
const supportPanel = document.querySelector("#supportPanel");
const supportClose = document.querySelector("#supportClose");
const supportUnread = document.querySelector("#supportUnread");
const supportMessages = document.querySelector("#supportMessages");
const supportForm = document.querySelector("#supportForm");
const supportInput = document.querySelector("#supportInput");
const supportThreadsKey = "wushuSupportThreads";
const supportSessionKey = "wushuSupportSessionId";
const phoneVerificationKey = "wushuPhoneVerification";
const supportSessionId = getOrCreateSupportSessionId();
const apiEnabled = window.location.protocol !== "file:";
const agreementFile = "assets/wushu-private-coaching-agreement.pdf";
const agreementName = "武术私教服务协议";
const agreementVersion = "2026-05-16-commercial-risk-v2";
const agreementConfirmationText = "我已完整阅读并理解安全风险、取消规则、上门范围等内容，自愿确认并提交本次预约。";
const homeTeachingNote = "可上门教学：西城区、东城区、海淀区、朝阳区、丰台区10公里内可上门教学";
const fixedTeachingNote = "定点授课：具体训练场地由工作人员电话确认";
const policyVersion = "2026-05-16";
const cancellationPolicyText = "上课前24小时以上可申请取消或改期；不足24小时取消、迟到超过20分钟或无故未到，工作人员将按实际情况确认是否消耗本次课时。教练原因导致无法上课的，可免费改期或退还对应费用。";
const refundPolicyText = "未开课且未发生服务成本的费用可申请退还；已完成课程、已确认消耗课程、第三方支付通道可能产生的手续费及双方另行确认的实际成本，按实际情况扣除后处理。";
const safetyPolicyText = "武术训练存在扭伤、拉伤、碰撞、旧伤复发等运动风险。学员需如实告知健康状况并听从教练安排；未成年人训练需监护人同意，上门课默认要求监护人在场。";
const agreementAccepted = document.querySelector("#agreementAccepted");
const agreementCheckText = document.querySelector("#agreementCheckText");
const openAgreement = document.querySelector("#openAgreement");
const agreementModal = document.querySelector("#agreementModal");
const agreementDocument = document.querySelector("#agreementDocument");
const agreementModalCoach = document.querySelector("#agreementModalCoach");
const closeAgreement = document.querySelector("#closeAgreement");
const agreeFromModal = document.querySelector("#agreeFromModal");
const paymentPlan = document.querySelector("#paymentPlan");
const paymentMethod = document.querySelector("#paymentMethod");
const paymentAcknowledged = document.querySelector("#paymentAcknowledged");
const filterOptions = ["全部 All", ...new Set(coaches.flatMap((coach) => coach.specialties))];
const upcomingDates = buildUpcomingDates();
const bookingStatuses = ["待支付", "待跟进", "已联系", "已确认", "已完成", "已取消"];
const agreementState = {
  openedAt: "",
  confirmedAt: ""
};
const phoneVerification = {
  phone: "",
  sentCode: "",
  sentAt: "",
  verifiedAt: "",
  token: ""
};
let paymentPollingTimer = null;
const advisorProfiles = [
  {
    coachId: "li",
    programName: "竞技武术套路",
    projectCn: "竞技武术套路",
    projectEn: "Competitive Wushu",
    keywords: ["竞技", "套路", "比赛", "竞赛", "赛事", "冠军", "长拳", "刀术", "棍术", "翻子", "表演", "专业", "腾空", "考级", "升学"],
    reasonCn: "你的目标更偏向动作规格、套路表现和专业进阶，李政翰的北京队训练背景与赛事成绩最匹配。",
    pathCn: "建议先做动作基础评估，再进入长拳、器械或成套表现力训练。"
  },
  {
    coachId: "zhu",
    programName: "南拳与南派器械",
    projectCn: "南拳与器械套路",
    projectEn: "Nanquan & Weapons Forms",
    keywords: ["南拳", "南刀", "南棍", "朴刀", "形意", "形意拳", "全运会", "运动健将", "六段", "北京队", "套路", "比赛", "竞赛", "赛事", "专业", "器械"],
    reasonCn: "你的目标更接近南拳、南刀、南棍或传统器械套路专项，朱万博的专业队经历、全运会成绩和高校训练背景更匹配。",
    pathCn: "建议先评估基本功与专项风格，再进入南拳体系、器械套路和成套质量提升。"
  },
  {
    coachId: "guo",
    programName: "太极拳与形意拳",
    projectCn: "太极拳与形意拳",
    projectEn: "Tai Chi & Xingyiquan",
    keywords: ["太极", "太极拳", "自选太极", "形意", "形意拳", "传统", "传统套路", "冠军", "全国冠军", "冠军赛", "锦标赛", "北京队", "健将", "比赛", "竞赛", "赛事", "专业", "套路"],
    reasonCn: "你的目标更接近太极拳、形意拳或传统套路的专业提升，郭子嘉的北京队现役背景和全国冠军成绩更匹配。",
    pathCn: "建议先评估身法、步型与劲力表达，再进入太极拳套路规格、形意拳发力和赛事表现力训练。"
  },
  {
    coachId: "zhang",
    programName: "剑术枪术八卦掌",
    projectCn: "剑术、枪术与八卦掌",
    projectEn: "Sword, Spear & Baguazhang",
    keywords: ["剑术", "剑", "枪术", "枪", "八卦掌", "八卦", "世界冠军", "世锦赛", "世界武术锦标赛", "世界杯", "国际级", "健将", "冠军赛", "锦标赛", "全运会", "器械", "比赛", "竞赛", "赛事", "专业", "套路"],
    reasonCn: "你的目标更偏向剑术、枪术、八卦掌或世界级赛事标准，张清淳的国际级健将资质和世界冠军成绩最匹配。",
    pathCn: "建议先评估器械基础、身法路线和成套稳定性，再进入剑术、枪术或八卦掌专项强化。"
  }
];

function programLabel(program) {
  return `${program.nameCn} ${program.nameEn}`;
}

function coachLabel(coach) {
  return `${coach.nameCn} ${coach.nameEn}`;
}

function coachPhotoStyle(coach) {
  return coach.photo ? ` style="--coach-photo: url('${coach.photo}')"` : "";
}

function renderVideoThumb(video) {
  return `<img src="${video.poster}" alt="${video.titleCn} ${video.titleEn}" />`;
}

function renderCoachVideoLinks(coach) {
  if (!coach.videos.length) return "";

  return `
    <div class="coach-video-links" aria-label="${coach.nameCn} 视频列表">
      ${coach.videos
        .map(
          (video, index) =>
            `<button type="button" data-coach-video-id="${coach.id}-${index}">${index + 1}. ${video.titleCn}</button>`
        )
        .join("")}
    </div>
  `;
}

function renderCoachAchievements(coach) {
  const items = coach.achievements && coach.achievements.length
    ? coach.achievements
    : coach.certificationCn.split(/[；·]/).map((item) => item.trim()).filter(Boolean);

  return `
    <div class="achievement-block">
      <span>资质与成绩 Achievements</span>
      <ul class="achievement-list">
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <p class="en">${coach.certificationEn}</p>
    </div>
  `;
}

function buildUpcomingDates() {
  const weekdayCn = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  const weekdayEn = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);
    const weekday = date.getDay();
    return {
      index,
      value: toLocalDateValue(date),
      day: `${weekdayCn[weekday]} ${weekdayEn[weekday]}`,
      label: index === 0 ? "今天 Today" : `${date.getMonth() + 1}/${date.getDate()}`,
      weekday
    };
  });
}

function toLocalDateValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getSelectedCoach() {
  return coaches.find((coach) => coach.id === state.selectedCoachId) || coaches[0];
}

function renderFilters() {
  coachFilters.innerHTML = filterOptions
    .map((item) => `<button class="filter-btn ${state.activeFilter === item ? "is-active" : ""}" type="button" data-filter="${item}">${item}</button>`)
    .join("");
}

function renderCoaches() {
  const visibleCoaches =
    state.activeFilter === "全部 All"
      ? coaches
      : coaches.filter((coach) => coach.specialties.includes(state.activeFilter));

  coachGrid.innerHTML = visibleCoaches
    .map(
      (coach) => `
        <article class="coach-card">
          <div class="coach-photo ${coach.photoClass}"${coachPhotoStyle(coach)}>
            <span>${coach.initials}</span>
          </div>
          <div class="coach-body">
            <div class="coach-title">
              <div>
                <h3>${coach.nameCn} <em>${coach.nameEn}</em></h3>
                <p>${coach.titleCn} · ${coach.titleEn}</p>
                <p>${coach.yearsCn} · ${coach.yearsEn}</p>
              </div>
              <span class="price">${coach.price}</span>
            </div>
            <div class="tag-list">${coach.specialties.map((tag) => `<span>${tag}</span>`).join("")}</div>
            <p>${coach.focusCn}</p>
            <p class="en">${coach.focusEn}</p>
            ${renderCoachAchievements(coach)}
            <div class="coach-actions">
              <button type="button" data-book-coach="${coach.id}">约Ta的课 Book</button>
              <button type="button" data-video-coach="${coach.id}">看视频 Video</button>
            </div>
            ${renderCoachVideoLinks(coach)}
          </div>
        </article>
      `
    )
    .join("");
}

function renderVideos() {
  const videos = coaches.flatMap((coach) =>
    coach.videos.map((video, index) => ({
      ...video,
      coachId: coach.id,
      coachName: coachLabel(coach),
      poster: video.poster || coach.photo || "assets/ink-hero.png",
      id: `${coach.id}-${index}`
    }))
  );

  videoGrid.innerHTML = videos
    .map(
      (video) => `
        <button class="video-card" type="button" data-video-id="${video.id}">
          <span class="video-thumb">
            ${renderVideoThumb(video)}
            <span class="play-mark">${video.src ? "播放" : "▶"}</span>
          </span>
          <span class="video-body">
            <span class="video-meta">
              <span>${video.coachName}</span>
              <span>${video.duration}</span>
            </span>
            <h3>${video.titleCn}</h3>
            <strong>${video.titleEn}</strong>
            <p>${video.topicCn}</p>
            <p class="en">${video.topicEn}</p>
          </span>
        </button>
      `
    )
    .join("");
}

function renderPrograms() {
  programGrid.innerHTML = programs
    .map(
      (program) => `
        <button class="program-card" type="button" data-program-name="${program.nameCn}">
          <div class="program-top">
            <div>
              <h3>${program.nameCn}</h3>
              <strong>${program.nameEn}</strong>
            </div>
            <span class="program-mark">${program.mark}</span>
          </div>
          <p>${program.descCn}</p>
          <p class="en">${program.descEn}</p>
          <div class="program-stats">${program.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        </button>
      `
    )
    .join("");
}

function renderSelectors() {
  coachSelect.innerHTML = coaches.map((coach) => `<option value="${coach.id}">${coach.nameCn} ${coach.nameEn} · ${coach.titleCn}</option>`).join("");
  programSelect.innerHTML = programs.map((program) => `<option value="${program.nameCn}">${programLabel(program)}</option>`).join("");
  coachSelect.value = state.selectedCoachId;
}

function renderDates() {
  dateStrip.innerHTML = upcomingDates
    .map(
      (date) => `
        <button class="date-btn ${state.selectedDateIndex === date.index ? "is-active" : ""}" type="button" data-date-index="${date.index}">
          <strong>${date.label}</strong>
          <span>${date.day}</span>
        </button>
      `
    )
    .join("");
}

function getSlotCapacity(slot, coachId) {
  const hour = Number(slot.split(":")[0]);
  const baseCapacity = hour >= 18 ? 2 : 3;
  return ["he", "zhou"].includes(coachId) ? baseCapacity + 1 : baseCapacity;
}

function getSlotBookingCount(coach, dateValue, slot) {
  const byId = new Map();
  [...state.availabilityBookings, ...state.bookings].forEach((booking) => {
    byId.set(booking.id || `${booking.coachId || booking.coachName}-${booking.date}-${booking.slot}-${booking.phone || ""}`, booking);
  });
  return [...byId.values()].filter((booking) => {
    const sameCoach = booking.coachId ? booking.coachId === coach.id : String(booking.coachName || "").includes(coach.nameCn);
    return sameCoach && booking.date === dateValue && booking.slot === slot && booking.status !== "已取消";
  }).length;
}

function getSlotAvailability(coach, dateValue, slot) {
  const capacity = getSlotCapacity(slot, coach.id);
  const booked = getSlotBookingCount(coach, dateValue, slot);
  return {
    capacity,
    booked,
    remaining: Math.max(0, capacity - booked),
    isFull: booked >= capacity
  };
}

function renderSlots() {
  const coach = getSelectedCoach();
  const selectedDate = upcomingDates[state.selectedDateIndex];
  const slots = coach.schedule[selectedDate.weekday] || [];
  slotGrid?.classList.remove("is-invalid");

  selectedCoachBadge.textContent = `${coach.nameCn} ${coach.nameEn.split(" ")[0]}`;
  coachSelect.value = coach.id;
  updateAgreementCoachDisplay();

  if (!slots.length) {
    state.selectedSlot = "";
    slotGrid.innerHTML = `<p class="empty-state">当天暂无可约时段 / No slots available</p>`;
    setBookingNotice(`${coach.nameCn} ${coach.nameEn} 在 ${selectedDate.label} 暂无可约时段 / No slots available.`);
    return;
  }

  const availableSlots = slots.filter((slot) => !getSlotAvailability(coach, selectedDate.value, slot).isFull);

  if (!availableSlots.includes(state.selectedSlot)) {
    state.selectedSlot = availableSlots[0] || "";
  }

  slotGrid.innerHTML = slots
    .map((slot) => {
      const availability = getSlotAvailability(coach, selectedDate.value, slot);
      const active = state.selectedSlot === slot && !availability.isFull ? "is-active" : "";
      const full = availability.isFull ? "is-full" : "";
      const disabled = availability.isFull ? "disabled" : "";
      return `<button class="slot-btn ${active} ${full}" type="button" data-slot="${slot}" ${disabled}>${slot} · 剩${availability.remaining}/${availability.capacity} seats</button>`;
    })
    .join("");

  setBookingNotice(state.selectedSlot
    ? `${coach.nameCn} ${coach.nameEn} · ${selectedDate.label} ${selectedDate.day} · ${state.selectedSlot}`
    : `${coach.nameCn} ${coach.nameEn} · ${selectedDate.label} 已约满 / Fully booked`);
}

function getBookingStatus(booking) {
  return booking.status || "待跟进";
}

function getFilteredBookings() {
  const search = normalizeText(state.bookingSearch);
  return state.bookings.filter((booking) => {
    const status = getBookingStatus(booking);
    const statusMatch = state.bookingStatusFilter === "全部" || status === state.bookingStatusFilter;
    const haystack = normalizeText([
      booking.id,
      booking.name,
      booking.phone,
      booking.program,
      booking.coachName,
      booking.serviceModeLabel,
      booking.serviceAddress,
      booking.homeTeachingNote,
      booking.dateLabel,
      booking.day,
      booking.slot,
      booking.goal,
      booking.ideas
    ].join(" "));
    return statusMatch && (!search || haystack.includes(search));
  });
}

function renderBookingStats() {
  if (!bookingStats) return;
  const total = state.bookings.length;
  const todayValue = toLocalDateValue(new Date());
  const todayCount = state.bookings.filter((booking) => booking.date === todayValue).length;
  const pendingCount = state.bookings.filter((booking) => ["待支付", "待跟进", "已联系"].includes(getBookingStatus(booking))).length;
  const confirmedCount = state.bookings.filter((booking) => getBookingStatus(booking) === "已确认").length;

  bookingStats.innerHTML = [
    ["总预约", total, "Total"],
    ["今日课程", todayCount, "Today"],
    ["待跟进", pendingCount, "Follow-up"],
    ["已确认", confirmedCount, "Confirmed"]
  ].map(([label, value, en]) => `
    <article>
      <strong>${value}</strong>
      <span>${label}<em>${en}</em></span>
    </article>
  `).join("");
}

function renderStatusOptions(status) {
  return bookingStatuses
    .map((item) => `<option value="${item}" ${item === status ? "selected" : ""}>${item}</option>`)
    .join("");
}

function renderBookings() {
  renderBookingStats();

  if (!state.bookings.length) {
    bookingList.innerHTML = `<div class="empty-state">暂无预约记录 / No bookings yet</div>`;
    return;
  }

  const visibleBookings = getFilteredBookings();

  if (!visibleBookings.length) {
    bookingList.innerHTML = `<div class="empty-state">没有符合条件的预约 / No matching bookings</div>`;
    return;
  }

  bookingList.innerHTML = visibleBookings
    .map(
      (booking) => {
        const bookingId = booking.id || String(state.bookings.indexOf(booking));
        const status = getBookingStatus(booking);
        return `
        <article class="booking-item">
          <div>
            <span class="booking-status ${["已联系", "已确认", "已完成"].includes(status) ? "is-done" : ""}">${status}</span>
            <h3>${escapeHTML(booking.program)} · ${escapeHTML(booking.coachName)}</h3>
            <p>${escapeHTML(booking.id || "")} · ${escapeHTML(booking.dateLabel)} ${escapeHTML(booking.day)} ${escapeHTML(booking.slot)} · ${escapeHTML(booking.name)} · ${escapeHTML(booking.phone)}</p>
            <p>${escapeHTML(bookingLocationText(booking))}</p>
          </div>
          <div class="booking-item-side">
            <strong>${escapeHTML(booking.price)}</strong>
            <div class="booking-item-actions">
              <button type="button" data-copy-booking="${bookingId}">复制 Copy</button>
              <button type="button" data-calendar-booking="${bookingId}">日历 Calendar</button>
            </div>
          </div>
        </article>
      `;
      }
    )
    .join("");
}

function saveBookings() {
  localStorage.setItem("wushuBookings", JSON.stringify(state.bookings));
}

async function apiRequest(path, options = {}) {
  if (!apiEnabled) return null;
  const response = await fetch(path, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });
  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    const error = new Error(payload?.error || "接口请求失败");
    error.status = response.status;
    error.payload = payload;
    throw error;
  }
  return payload;
}

async function refreshBookingsFromServer({ silent = true } = {}) {
  if (!apiEnabled) return false;
  try {
    const bookings = await apiRequest("/api/bookings");
    if (!Array.isArray(bookings)) return false;
    state.availabilityBookings = bookings;
    renderSlots();
    return true;
  } catch (error) {
    if (!silent) showToast("服务器预约数据暂时不可用，已使用本机数据 / Using local data");
    return false;
  }
}

async function createBookingOnServer(booking) {
  if (!apiEnabled) return booking;
  return apiRequest("/api/bookings", {
    method: "POST",
    body: JSON.stringify(booking)
  });
}

async function refreshPaymentConfig({ silent = true } = {}) {
  if (!apiEnabled) {
    state.paymentConfig = { wechatNativeReady: false, enabled: false };
    return state.paymentConfig;
  }
  try {
    state.paymentConfig = await apiRequest("/api/payments/config");
  } catch (error) {
    state.paymentConfig = { wechatNativeReady: false, enabled: false, error: error.message };
    if (!silent) showToast("支付配置暂时不可用 / Payment config unavailable");
  }
  return state.paymentConfig;
}

async function fetchPaymentStatus(orderId) {
  if (!apiEnabled || !orderId) return null;
  return apiRequest(`/api/payments/status/${encodeURIComponent(orderId)}`);
}

async function patchBookingOnServer(id, patch) {
  if (!apiEnabled || !id) return null;
  return apiRequest(`/api/bookings/${encodeURIComponent(id)}`, {
    method: "PATCH",
    body: JSON.stringify(patch)
  });
}

async function deleteBookingOnServer(id) {
  if (!apiEnabled || !id) return null;
  return apiRequest(`/api/bookings/${encodeURIComponent(id)}`, { method: "DELETE" });
}

async function sendPhoneCodeRequest(phone) {
  if (!apiEnabled) {
    throw new Error("请通过 http://localhost:8787 打开网站后发送真实短信");
  }

  return apiRequest("/api/phone-code/send", {
    method: "POST",
    body: JSON.stringify({ phone })
  });
}

async function verifyPhoneCodeRequest(phone, code) {
  if (!apiEnabled) {
    throw new Error("请通过 http://localhost:8787 打开网站后验证短信");
  }

  return apiRequest("/api/phone-code/verify", {
    method: "POST",
    body: JSON.stringify({ phone, code })
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function normalizePhone(value) {
  return String(value || "").replace(/\s+/g, "");
}

function setBookingNotice(message, warning = false) {
  if (!bookingSummary) return;
  bookingSummary.textContent = message;
  bookingSummary.classList.toggle("is-warning", warning);
}

function setPhoneVerifyStatus(message, verified = false) {
  if (phoneVerifyStatus) phoneVerifyStatus.textContent = message;
  phoneVerifyStatus?.closest(".phone-verify-box")?.classList.toggle("is-verified", verified);
}

function savePhoneVerification() {
  localStorage.setItem(phoneVerificationKey, JSON.stringify({
    phone: phoneVerification.phone,
    verifiedAt: phoneVerification.verifiedAt,
    token: phoneVerification.token
  }));
}

function loadPhoneVerification() {
  try {
    const parsed = JSON.parse(localStorage.getItem(phoneVerificationKey) || "{}");
    if (parsed.phone && parsed.verifiedAt) {
      phoneVerification.phone = parsed.phone;
      phoneVerification.verifiedAt = parsed.verifiedAt;
      phoneVerification.token = parsed.token || "";
    }
  } catch {
    localStorage.removeItem(phoneVerificationKey);
  }
}

function resetPhoneVerification() {
  const phone = advisorPhone.value.trim();
  if (isPhoneVerified(phone)) {
    setPhoneVerifyStatus(`手机号已确认：${phoneVerification.verifiedAt}`, true);
    return;
  }
  setPhoneVerifyStatus("手机号未确认或已变更，请发送验证码并确认。", false);
}

function resetAgreementConfirmation() {
  agreementState.openedAt = "";
  agreementState.confirmedAt = "";
  if (agreementAccepted) agreementAccepted.checked = false;
}

function isPhoneVerified(phone) {
  return Boolean(phone && normalizePhone(phoneVerification.phone) === normalizePhone(phone) && phoneVerification.verifiedAt);
}

function showBookingRequirement(message) {
  setBookingNotice(message, true);
  showToast(message);
}

async function handleSendPhoneCode() {
  const phone = normalizePhone(advisorPhone.value);
  if (!phone || phone.length < 6) {
    setFieldError(advisorPhone, "请先填写正确手机号");
    advisorPhone.focus();
    showToast("请先填写正确手机号 / Please enter phone number");
    return;
  }

  try {
    const result = await sendPhoneCodeRequest(phone);
    phoneVerification.phone = phone;
    phoneVerification.sentAt = new Date().toLocaleString("zh-CN", { hour12: false });
    phoneVerification.verifiedAt = "";
    phoneVerification.token = "";
    localStorage.removeItem(phoneVerificationKey);
    clearFieldError(advisorPhone);
    clearFieldError(phoneCodeInput);
    phoneVerifyStatus?.closest(".phone-verify-box")?.classList.remove("is-invalid");
    if (result?.devCode) {
      setPhoneVerifyStatus(`本机测试验证码：${result.devCode}。上线前请在短信配置页接入真实短信。`, false);
      showToast(`本机测试验证码：${result.devCode}`);
      return;
    }
    setPhoneVerifyStatus("验证码已通过短信发送，10分钟内有效。", false);
    showToast("验证码已发送到手机 / Code sent by SMS");
  } catch (error) {
    showToast(error.message || "验证码发送失败 / Failed to send code");
  }
}

async function handleVerifyPhoneCode() {
  const phone = normalizePhone(advisorPhone.value);
  const code = phoneCodeInput?.value.trim() || "";
  if (!phone || !code) {
    if (!phone) setFieldError(advisorPhone, "请填写手机号");
    if (!code) setFieldError(phoneCodeInput, "请填写验证码");
    showToast("请填写手机号和验证码 / Enter phone and code");
    return;
  }

  try {
    const result = await verifyPhoneCodeRequest(phone, code);
    phoneVerification.phone = phone;
    phoneVerification.verifiedAt = result?.verifiedAt || new Date().toLocaleString("zh-CN", { hour12: false });
    phoneVerification.token = result?.token || "";
    savePhoneVerification();
    clearFieldError(advisorPhone);
    clearFieldError(phoneCodeInput);
    phoneVerifyStatus?.closest(".phone-verify-box")?.classList.remove("is-invalid");
    setPhoneVerifyStatus(`手机号已确认：${phoneVerification.verifiedAt}`, true);
    showToast("手机号已确认 / Phone verified");
  } catch (error) {
    phoneVerification.verifiedAt = "";
    setPhoneVerifyStatus("验证码不正确或已过期，请重新确认。", false);
    showToast(error.message || "验证码不正确 / Invalid code");
  }
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalizeText(value) {
  return String(value || "").trim().toLowerCase();
}

function fieldContainer(field) {
  return field?.closest("label") || field?.closest(".agreement-check") || field?.closest(".phone-verify-box") || null;
}

function clearFieldError(field) {
  const container = fieldContainer(field);
  if (!container) return;
  container.classList.remove("is-invalid");
  field?.removeAttribute("aria-invalid");
  const error = container.querySelector(".field-error");
  if (error) error.remove();
}

function setFieldError(field, message) {
  const container = fieldContainer(field);
  if (!container) return message;
  container.classList.add("is-invalid");
  field?.setAttribute("aria-invalid", "true");
  let error = container.querySelector(".field-error");
  if (!error) {
    error = document.createElement("small");
    error.className = "field-error";
    container.appendChild(error);
  }
  error.textContent = message;
  return message;
}

function clearFieldErrors(fields) {
  fields.forEach(clearFieldError);
  phoneVerifyStatus?.closest(".phone-verify-box")?.classList.remove("is-invalid");
  const agreementBox = agreementAccepted?.closest(".agreement-check");
  agreementBox?.classList.remove("is-invalid");
  agreementBox?.querySelector(".field-error")?.remove();
  slotGrid?.classList.remove("is-invalid");
}

function isValidPhone(value) {
  return normalizePhone(value).length >= 6;
}

function isValidIdCard(value) {
  const id = String(value || "").trim();
  return /^(\d{15}|\d{17}[\dXx])$/.test(id);
}

function isMinorAge(value) {
  const age = Number(value);
  return Number.isFinite(age) && age > 0 && age < 18;
}

function minorSafetyRequired() {
  return isMinorAge(advisorAge?.value);
}

function setMinorSafetyExpanded(expanded) {
  if (!minorSafetyPanel || !minorSafetyBody || !minorSafetyToggle) return;
  minorSafetyPanel.classList.toggle("is-collapsed", !expanded);
  minorSafetyBody.hidden = !expanded;
  minorSafetyToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
  const label = minorSafetyToggle.querySelector("b");
  if (label) label.textContent = expanded ? "收起" : "展开填写";
}

function syncMinorSafetyPanel() {
  const required = minorSafetyRequired();
  const wasHidden = Boolean(minorSafetyPanel?.hidden);
  if (minorSafetyPanel) minorSafetyPanel.hidden = !required;
  if (required && wasHidden) setMinorSafetyExpanded(false);
  if (!required) {
    [guardianName, guardianPhone, emergencyName, emergencyPhone, healthHistory, riskAcknowledged].forEach((field) => {
      if (!field) return;
      if (field.type === "checkbox") field.checked = false;
      else field.value = "";
      clearFieldError(field);
    });
    setMinorSafetyExpanded(false);
  }
  if (agreementModal && !agreementModal.hidden) renderAgreementDocument();
}

function maskIdCard(value) {
  const id = String(value || "").trim();
  if (!id) return "";
  if (id.length <= 8) return id.replace(/.(?=.{2})/g, "*");
  return `${id.slice(0, 3)}${"*".repeat(Math.max(6, id.length - 7))}${id.slice(-4)}`;
}

function paymentPlanAmount(value = paymentPlan?.value) {
  if (value === "trial-99") return "¥99";
  if (value === "trial-199") return "¥199";
  return "工作人员确认";
}

function paymentPlanAmountCents(value = paymentPlan?.value) {
  if (value === "trial-99") return 9900;
  if (value === "trial-199") return 19900;
  return 0;
}

function paymentPlanLabel(value = paymentPlan?.value) {
  const option = Array.from(paymentPlan?.options || []).find((item) => item.value === value);
  return option?.textContent || "工作人员确认价格";
}

function paymentMethodLabel(value = paymentMethod?.value) {
  const option = Array.from(paymentMethod?.options || []).find((item) => item.value === value);
  return option?.textContent || "待选择";
}

function isWechatNativePayment(value = paymentMethod?.value) {
  return value === "wechat-native";
}

function paymentInitialStatus() {
  return isWechatNativePayment() ? "待微信支付" : "工作人员确认";
}

function wechatPaymentReady() {
  return Boolean(state.paymentConfig?.wechatNativeReady);
}

function renderAdvisorValidation(messages) {
  advisorResult.innerHTML = `
    <p class="section-kicker">信息未完整 Validation</p>
    <div class="validation-summary">
      <strong>AI还不能推荐，因为这些信息需要补全：</strong>
      <ul>${messages.map((message) => `<li>${escapeHTML(message)}</li>`).join("")}</ul>
    </div>
  `;
}

function validateAdvisorFields({ includeIntent = true } = {}) {
  const messages = [];
  clearFieldErrors([advisorName, advisorAge, advisorGender, advisorPhone, advisorIdCard, guardianName, guardianPhone, advisorGoal, advisorIdeas]);

  if (!advisorName.value.trim()) messages.push(setFieldError(advisorName, "请填写姓名"));

  const age = Number(advisorAge.value);
  if (!advisorAge.value) {
    messages.push(setFieldError(advisorAge, "请填写年龄"));
  } else if (!Number.isFinite(age) || age < 3 || age > 90) {
    messages.push(setFieldError(advisorAge, "年龄请填写 3-90 之间的数字"));
  }

  if (!advisorGender.value) messages.push(setFieldError(advisorGender, "请选择性别"));

  if (!advisorPhone.value.trim()) {
    messages.push(setFieldError(advisorPhone, "请填写联系电话"));
  } else if (!isValidPhone(advisorPhone.value)) {
    messages.push(setFieldError(advisorPhone, "联系电话格式不正确"));
  }

  if (advisorIdCard.value.trim() && !isValidIdCard(advisorIdCard.value)) {
    messages.push(setFieldError(advisorIdCard, "身份证号格式不正确，请填写15位或18位身份证号；预约阶段可先不填"));
  }

  if (minorSafetyRequired()) {
    setMinorSafetyExpanded(true);
    if (!guardianName.value.trim()) messages.push(setFieldError(guardianName, "未成年人请填写监护人姓名"));
    if (!guardianPhone.value.trim()) messages.push(setFieldError(guardianPhone, "未成年人请填写监护人电话"));
    else if (!isValidPhone(guardianPhone.value)) messages.push(setFieldError(guardianPhone, "监护人电话格式不正确"));
  }

  if (includeIntent && !advisorProgram.value && !advisorGoal.value.trim() && !advisorIdeas.value.trim()) {
    const message = "请填写想学习的项目、目标或其他想法，至少一项";
    messages.push(setFieldError(advisorGoal, message));
    setFieldError(advisorIdeas, message);
  }

  return messages;
}

function setAgreementError(message) {
  const agreementBox = agreementAccepted?.closest(".agreement-check");
  if (!agreementBox) return message;
  agreementBox.classList.add("is-invalid");
  let error = agreementBox.querySelector(".field-error");
  if (!error) {
    error = document.createElement("small");
    error.className = "field-error";
    agreementBox.appendChild(error);
  }
  error.textContent = message;
  return message;
}

function validateBookingFields(location) {
  const messages = [];
  clearFieldErrors([advisorName, advisorAge, advisorPhone, advisorIdCard, guardianName, guardianPhone, emergencyName, emergencyPhone, healthHistory, riskAcknowledged, bookingAddress, paymentPlan, paymentMethod, paymentAcknowledged]);

  if (!state.selectedSlot) {
    slotGrid?.classList.add("is-invalid");
    messages.push("请选择一个可约时间段");
  }

  if (!advisorName.value.trim()) messages.push(setFieldError(advisorName, "请填写姓名"));

  if (!advisorPhone.value.trim()) {
    messages.push(setFieldError(advisorPhone, "请填写联系电话"));
  } else if (!isValidPhone(advisorPhone.value)) {
    messages.push(setFieldError(advisorPhone, "联系电话格式不正确"));
  }

  if (advisorIdCard.value.trim() && !isValidIdCard(advisorIdCard.value)) {
    messages.push(setFieldError(advisorIdCard, "身份证号格式不正确；预约阶段可先不填，签约/付款后再补充"));
  }

  if (location.serviceMode === "home" && !location.serviceAddress) {
    messages.push(setFieldError(bookingAddress, "选择上门教学后，请填写具体上课位置"));
  }

  if (minorSafetyRequired()) {
    setMinorSafetyExpanded(true);
    if (!guardianName.value.trim()) messages.push(setFieldError(guardianName, "未成年人预约必须填写监护人姓名"));
    if (!guardianPhone.value.trim()) messages.push(setFieldError(guardianPhone, "未成年人预约必须填写监护人电话"));
    else if (!isValidPhone(guardianPhone.value)) messages.push(setFieldError(guardianPhone, "监护人电话格式不正确"));
    if (!emergencyName.value.trim()) messages.push(setFieldError(emergencyName, "未成年人预约请填写紧急联系人"));
    if (!emergencyPhone.value.trim()) {
      messages.push(setFieldError(emergencyPhone, "未成年人预约请填写紧急联系电话"));
    } else if (!isValidPhone(emergencyPhone.value)) {
      messages.push(setFieldError(emergencyPhone, "紧急联系电话格式不正确"));
    }
    if (!healthHistory.value.trim()) messages.push(setFieldError(healthHistory, "未成年人请填写身体情况；如无请写“无”"));
    if (!riskAcknowledged?.checked) {
      messages.push(setFieldError(riskAcknowledged, "请确认已知晓未成年人训练风险和安全要求"));
    }
  }

  if (!paymentMethod?.value) messages.push(setFieldError(paymentMethod, "请选择支付/核销方式"));
  if (isWechatNativePayment()) {
    if (!paymentPlanAmountCents()) messages.push(setFieldError(paymentPlan, "微信在线支付需要选择99元或199元定金"));
    if (!wechatPaymentReady()) {
      messages.push(setFieldError(paymentMethod, "微信支付商户参数未配置，暂时不能在线收款；请先配置 payment.config.json"));
    }
  }
  if (!paymentAcknowledged?.checked) {
    messages.push(setFieldError(paymentAcknowledged, "请确认本次会生成预约记录"));
  }

  if (!agreementAccepted?.checked || !agreementState.confirmedAt) {
    messages.push(setAgreementError("请先阅读协议，并在协议底部点击“我已完整阅读并确认”"));
  }

  return messages;
}

function showBookingValidation(messages) {
  const summary = messages.length === 1 ? messages[0] : `请先补全：${messages.join("；")}`;
  setBookingNotice(summary, true);
  showToast(summary);
}

function getOrCreateSupportSessionId() {
  const existing = localStorage.getItem(supportSessionKey);
  if (existing) return existing;
  const nextId = `cs-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  localStorage.setItem(supportSessionKey, nextId);
  return nextId;
}

function loadSupportThreads() {
  try {
    const parsed = JSON.parse(localStorage.getItem(supportThreadsKey) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveSupportThreads(threads) {
  localStorage.setItem(supportThreadsKey, JSON.stringify(threads.slice(0, 80)));
  if (apiEnabled) {
    threads.slice(0, 3).forEach((thread) => {
      apiRequest("/api/support-threads", {
        method: "POST",
        body: JSON.stringify(thread)
      }).catch(() => {});
    });
  }
}

function getSupportCustomerSnapshot() {
  return {
    name: advisorName.value.trim(),
    phone: advisorPhone.value.trim(),
    idCard: maskIdCard(advisorIdCard.value.trim()),
    age: advisorAge.value,
    gender: advisorGender.value,
    guardianName: minorSafetyRequired() ? guardianName.value.trim() : "",
    guardianPhone: minorSafetyRequired() ? guardianPhone.value.trim() : "",
    emergencyName: minorSafetyRequired() ? emergencyName.value.trim() : "",
    emergencyPhone: minorSafetyRequired() ? emergencyPhone.value.trim() : "",
    healthHistory: minorSafetyRequired() ? healthHistory.value.trim() : "",
    riskAcknowledged: minorSafetyRequired() ? Boolean(riskAcknowledged?.checked) : false,
    program: advisorProgram.value,
    goal: advisorGoal.value.trim(),
    ideas: advisorIdeas.value.trim()
  };
}

function saveSupportExchange(question, reply) {
  const now = new Date().toLocaleString("zh-CN", { hour12: false });
  const customer = getSupportCustomerSnapshot();
  const threads = loadSupportThreads();
  const existing = threads.find((thread) => thread.id === supportSessionId);
  const nextMessages = [
    { role: "user", text: question, createdAt: now },
    { role: "bot", text: reply.text, createdAt: now }
  ];

  if (existing) {
    existing.name = customer.name || existing.name || "未留姓名";
    existing.phone = customer.phone || existing.phone || "";
    existing.idCard = customer.idCard || existing.idCard || "";
    existing.age = customer.age || existing.age || "";
    existing.gender = customer.gender || existing.gender || "";
    existing.guardianName = customer.guardianName || existing.guardianName || "";
    existing.guardianPhone = customer.guardianPhone || existing.guardianPhone || "";
    existing.emergencyName = customer.emergencyName || existing.emergencyName || "";
    existing.emergencyPhone = customer.emergencyPhone || existing.emergencyPhone || "";
    existing.healthHistory = customer.healthHistory || existing.healthHistory || "";
    existing.riskAcknowledged = customer.riskAcknowledged || existing.riskAcknowledged || false;
    existing.program = customer.program || existing.program || "";
    existing.goal = customer.goal || existing.goal || "";
    existing.ideas = customer.ideas || existing.ideas || "";
    existing.status = reply.needsStaff ? "待处理" : existing.status === "待处理" ? "待处理" : "已自动回复";
    existing.updatedAt = now;
    existing.messages = [...(existing.messages || []), ...nextMessages].slice(-24);
  } else {
    threads.unshift({
      id: supportSessionId,
      name: customer.name || "未留姓名",
      phone: customer.phone || "",
      idCard: customer.idCard || "",
      age: customer.age || "",
      gender: customer.gender || "",
      guardianName: customer.guardianName || "",
      guardianPhone: customer.guardianPhone || "",
      emergencyName: customer.emergencyName || "",
      emergencyPhone: customer.emergencyPhone || "",
      healthHistory: customer.healthHistory || "",
      riskAcknowledged: customer.riskAcknowledged || false,
      program: customer.program || "",
      goal: customer.goal || "",
      ideas: customer.ideas || "",
      status: reply.needsStaff ? "待处理" : "已自动回复",
      createdAt: now,
      updatedAt: now,
      messages: nextMessages
    });
  }

  saveSupportThreads(threads.sort((a, b) => Date.parse(b.updatedAt || b.createdAt || "") - Date.parse(a.updatedAt || a.createdAt || "")));
}

function openSupportPanel() {
  if (!supportPanel || !supportToggle) return;
  supportPanel.hidden = false;
  supportToggle.setAttribute("aria-expanded", "true");
  if (supportUnread) supportUnread.hidden = true;
  window.setTimeout(() => supportInput?.focus(), 80);
}

function closeSupportPanel() {
  if (!supportPanel || !supportToggle) return;
  supportPanel.hidden = true;
  supportToggle.setAttribute("aria-expanded", "false");
}

function agreementLine(label, value = "__________") {
  return `
    <div class="agreement-line">
      <span>${label}</span>
      <strong>${escapeHTML(value)}</strong>
    </div>
  `;
}

function renderAgreementDocument() {
  if (!agreementDocument) return;
  const coach = getSelectedCoach();
  const coachName = coach?.nameCn || "__________";
  const minor = minorSafetyRequired();
  if (agreementModalCoach) agreementModalCoach.textContent = `当前教练：${coachName}`;

  agreementDocument.innerHTML = `
    <article class="agreement-paper">
      <div class="agreement-title">
        <span>Service Agreement</span>
        <h4>武术私教服务协议</h4>
      </div>

      <section class="agreement-party-grid">
        ${agreementLine("甲方（学员/监护人）：", advisorName.value.trim() || "__________")}
        ${agreementLine("身份证号：", advisorIdCard.value.trim() ? maskIdCard(advisorIdCard.value.trim()) : "签约/付款后补充")}
        ${agreementLine("联系电话：", advisorPhone.value.trim() || "__________")}
        ${minor ? agreementLine("监护人：", guardianName.value.trim() || "未成年人必填") : ""}
        ${minor ? agreementLine("监护人电话：", guardianPhone.value.trim() || "未成年人必填") : ""}
        ${minor ? agreementLine("紧急联系人：", emergencyName.value.trim() || "未成年人必填") : ""}
        ${agreementLine("乙方（教练）：", coachName)}
        ${agreementLine("联系电话：")}
      </section>

      <section class="agreement-section">
        <h5>一、课程信息</h5>
        <ol>
          <li>预约课程：${escapeHTML(programSelect.options[programSelect.selectedIndex]?.textContent || "页面所选课程")}；预约教练：${escapeHTML(coachName)}。</li>
          <li>预约时间：${escapeHTML(upcomingDates[state.selectedDateIndex]?.label || "待选择")} ${escapeHTML(state.selectedSlot || "待选择")}。</li>
          <li>体验课确认：${escapeHTML(paymentPlanAmount())}；确认方式：${escapeHTML(paymentMethodLabel())}；公开视频版本提交后由工作人员电话确认。</li>
          <li>预约规则：上课需提前24小时预约；临时取消未提前24小时告知，将按本协议取消与爽约规则处理。</li>
        </ol>
      </section>

      <section class="agreement-section">
        <h5>二、取消、退款与爽约规则</h5>
        <ol>
          <li>${escapeHTML(cancellationPolicyText)}</li>
          <li>${escapeHTML(refundPolicyText)}</li>
          <li>如因天气、场地、教练赛训安排、不可抗力等原因影响上课，双方优先协商改期；无法继续履约的，按未履约部分处理。</li>
        </ol>
      </section>

      <section class="agreement-section">
        <h5>三、双方权利与义务</h5>
        <ol>
          <li>乙方按专业标准提供武术套路、体考专项、动作纠错、体能训练等教学服务，为甲方定制个人训练计划。</li>
          <li>甲方需如实告知自身健康状况、旧伤、病史等情况，训练中听从教练指导，遵守安全规范。</li>
          <li>甲方上课迟到，损耗时长不补齐；无故旷课、临时爽约，按正常消课处理。</li>
          <li>乙方课后提供动作指导、训练反馈及日常咨询服务。</li>
        </ol>
      </section>

      <section class="agreement-section">
        <h5>四、安全责任与未成年人约定</h5>
        <ol>
          <li>${escapeHTML(safetyPolicyText)}</li>
          <li>${minor ? `未成年人当前填写身体情况：${escapeHTML(healthHistory.value.trim() || "未填写")}。` : "成年学员无需在预约阶段填写监护人与紧急联系人信息，如有伤病或特殊情况可在到课前主动告知工作人员。"}</li>
          <li>乙方教学全程做好安全示范与防护指导，尽到安全告知义务。</li>
          <li>甲方隐瞒自身伤病、病史、身体状况，或不服从教练指导、私自做危险动作造成受伤，甲方自行承担责任。</li>
          <li>因乙方教学明显失误、操作不当造成甲方训练受伤，乙方承担相应责任。</li>
        </ol>
      </section>

      <section class="agreement-section">
        <h5>五、个人信息与证据链</h5>
        <ol>
          <li>甲方同意乙方为预约排课、联系确认、合同履行、安全风控和售后处理所必需，处理本次提交的姓名、电话、年龄、训练目标、上课地址、健康提示、监护人和紧急联系人信息。</li>
          <li>身份证号仅在签约、付款、发票、争议处理或法律法规要求时补充；后台展示应做脱敏处理。</li>
          <li>系统将记录预约编号、订单编号、协议版本、打开时间、确认时间、手机号验证时间、预约教练、课程、时间、地点、支付状态和协议文本快照。</li>
        </ol>
      </section>

      <section class="agreement-section">
        <h5>六、其他约定</h5>
        <ol>
          <li>本协议一式两份，甲乙双方各存电子 / 纸质一份，签字即日生效，具有同等效力。</li>
          <li>双方有分歧优先友好协商，协商不成可向乙方属地相关部门调解处理。</li>
        </ol>
      </section>

      <section class="agreement-signatures">
        ${agreementLine("甲方签字：")}
        ${agreementLine("日期：", "____年 __月 __日")}
        ${agreementLine("乙方签字：")}
        ${agreementLine("日期：", "____年 __月 __日")}
      </section>

      <section class="agreement-confirmation">
        <strong>预约确认声明</strong>
        <p>${agreementConfirmationText}</p>
        <small>点击下方“我已完整阅读并确认”后，系统会记录协议版本、打开时间、确认时间、顾客姓名、联系电话、身份证号、预约教练、课程与上课地点信息。</small>
      </section>
    </article>
  `;
}

function updateAgreementCoachDisplay() {
  const coach = getSelectedCoach();
  if (agreementCheckText) {
    agreementCheckText.textContent = `我已阅读完毕并同意《${agreementName}》，本次预约教练为 ${coach.nameCn}，双方均遵守该协议。`;
  }
  if (agreementModal && !agreementModal.hidden) renderAgreementDocument();
}

function buildAgreementSnapshotText(booking) {
  return [
    agreementName,
    `协议版本：${agreementVersion}`,
    `政策版本：${policyVersion}`,
    `预约编号：${booking.id || "待生成"}`,
    `订单编号：${booking.orderId || "待生成"}`,
    `学员：${booking.name || ""}`,
    `电话：${booking.phone || ""}`,
    `身份证号：${booking.idCardMasked || maskIdCard(booking.idCard) || "签约/付款后补充"}`,
    `年龄/性别：${booking.age || ""} / ${booking.gender || ""}`,
    booking.isMinor ? `监护人：${booking.guardianName || ""} ${booking.guardianPhone || ""}` : "成年学员：无需监护人与紧急联系人",
    booking.isMinor ? `紧急联系人：${booking.emergencyName || ""} ${booking.emergencyPhone || ""}` : "",
    booking.isMinor ? `身体情况：${booking.healthHistory || ""}` : "",
    `教练：${booking.coachName || ""}`,
    `课程：${booking.program || ""}`,
    `时间：${booking.dateLabel || booking.date || ""} ${booking.day || ""} ${booking.slot || ""}`,
    `上课方式：${bookingLocationText(booking)}`,
    `定金/费用：${booking.paymentAmount || ""}`,
    `支付方式：${booking.paymentMethodLabel || ""}`,
    `取消规则：${cancellationPolicyText}`,
    `退款规则：${refundPolicyText}`,
    `安全规则：${safetyPolicyText}`,
    `确认声明：${agreementConfirmationText}`
  ].join("\n");
}

function openAgreementModal() {
  if (!agreementState.openedAt) {
    agreementState.openedAt = new Date().toLocaleString("zh-CN", { hour12: false });
  }
  renderAgreementDocument();
  if (agreementModal) {
    agreementModal.hidden = false;
    agreementModal.classList.add("is-open");
    agreementDocument?.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
}

function restoreAgreementScroll() {
  return undefined;
}

function closeAgreementModal() {
  if (!agreementModal) return;
  if (agreementModal.open && agreementModal.close) {
    agreementModal.close();
  }
  agreementModal.hidden = true;
  agreementModal.classList.remove("is-open");
}

function confirmAgreementFromModal() {
  if (agreementAccepted) agreementAccepted.checked = true;
  agreementState.confirmedAt = new Date().toLocaleString("zh-CN", { hour12: false });
  const agreementBox = agreementAccepted?.closest(".agreement-check");
  agreementBox?.classList.remove("is-invalid");
  agreementBox?.querySelector(".field-error")?.remove();
  closeAgreementModal();
  showToast("已确认阅读服务协议 / Agreement confirmed");
}

function appendSupportMessage(role, text, actions = []) {
  if (!supportMessages) return;
  const message = document.createElement("article");
  message.className = `support-message is-${role}`;
  const speaker = role === "user" ? "你 You" : "砺武堂客服 Support";
  const actionHTML = actions.length
    ? `<div class="support-actions">${actions
        .map((action) => {
          const targetAttr = action.target ? ` data-support-target="${escapeHTML(action.target)}"` : "";
          const questionAttr = action.question ? ` data-support-question="${escapeHTML(action.question)}"` : "";
          return `<button type="button"${targetAttr}${questionAttr}>${escapeHTML(action.label)}</button>`;
        })
        .join("")}</div>`
    : "";

  message.innerHTML = `
    <strong>${speaker}</strong>
    <div class="support-bubble">${escapeHTML(text).replace(/\n/g, "<br />")}</div>
    ${actionHTML}
  `;
  supportMessages.appendChild(message);
  supportMessages.scrollTop = supportMessages.scrollHeight;
}

function findCoachFromQuestion(question) {
  return coaches.find((coach) => {
    const tokens = [coach.nameCn, coach.nameEn, ...coach.specialties];
    return tokens.some((token) => normalizeText(question).includes(normalizeText(token)));
  });
}

function buildCoachSupportText(coach) {
  return `${coach.nameCn}教练适合：${coach.specialties.slice(0, 4).join("、")}。\n${coach.focusCn}\n课程价格：${coach.price}。`;
}

function buildProgramsSupportText() {
  return programs
    .map((program) => `${program.nameCn}：${program.descCn}`)
    .join("\n");
}

function buildPriceSupportText() {
  return coaches
    .map((coach) => `${coach.nameCn}：${coach.price} · ${coach.titleCn}`)
    .join("\n");
}

function buildTodayAvailabilityText() {
  const today = upcomingDates[0];
  return coaches
    .map((coach) => {
      const slots = coach.schedule[today.weekday] || [];
      const available = slots
        .filter((slot) => !getSlotAvailability(coach, today.value, slot).isFull)
        .slice(0, 4);
      return `${coach.nameCn}：${available.length ? available.join("、") : "今日已约满"}`;
    })
    .join("\n");
}

function buildMyBookingSupportText() {
  const phone = advisorPhone.value.trim();
  if (!phone) {
    return "为了保护预约隐私，请先在AI选课里填写你的电话。完成预约后，工作人员端会同步收到并联系确认。";
  }

  const records = state.bookings.filter((booking) => booking.phone === phone).slice(0, 3);

  if (!records.length) {
    return "目前没有查到这个电话在本浏览器里的预约记录。你可以先用AI选课，再确认教练和时间。";
  }

  return records
    .map((booking) => `${booking.name} · ${booking.coachName} · ${booking.dateLabel || booking.date} ${booking.day || ""} ${booking.slot} · ${booking.status}`)
    .join("\n");
}

function buildRecommendationSupportText(question) {
  const input = { age: Number(advisorAge.value) || 0, gender: advisorGender.value || "", program: question, goal: question, ideas: question };
  const recommendation = buildAdvisorRecommendation(input);
  return `按你的描述，优先推荐 ${recommendation.coach.nameCn} 教练。\n方向：${recommendation.program.nameCn}。\n理由：${recommendation.profile.reasonCn}\n如果你愿意更准确一点，可以在AI选课里填写年龄、项目和目标，系统会自动带入预约。`;
}

function getSupportReply(question) {
  const text = normalizeText(question);
  const coach = findCoachFromQuestion(question);

  if (/你好|您好|在吗|hello|hi/.test(text)) {
    return {
      text: "您好，我是砺武堂智能客服。可以直接问我教练、课程、价格、可约时间、怎么预约，或者说出你的目标，我会帮你判断适合哪位教练。",
      actions: [
        { label: "AI选课", target: "#ai-advisor" },
        { label: "看教练", target: "#coaches" }
      ]
    };
  }

  if (/人工|真人|转人工|联系我|打电话|电话联系|加微信|微信客服|客服处理/.test(text)) {
    return {
      text: "可以，我已经把你的咨询记录到工作人员端。请在AI选课里留下姓名和电话，工作人员会根据你的问题联系确认。",
      actions: [
        { label: "填写联系方式", target: "#ai-advisor" },
        { label: "继续预约", target: "#booking-page" }
      ],
      needsStaff: true
    };
  }

  if (/怎么约|预约|报名|下单|买课|体验课|流程/.test(text)) {
    return {
      text: "预约流程很简单：先在AI选课填写姓名、年龄、电话和目标，系统推荐合适教练；然后选择日期和时间段，点确认预约。提交后工作人员端会收到消息，并按电话联系你确认。",
      actions: [
        { label: "去AI选课", target: "#ai-advisor" },
        { label: "确认时间", target: "#booking-page" }
      ]
    };
  }

  if (/查预约|我的预约|预约记录|有没有提交|是否成功/.test(text)) {
    return {
      text: buildMyBookingSupportText(),
      actions: [{ label: "去确认预约", target: "#booking-page" }]
    };
  }

  if (/时间|几点|今天|明天|周|空位|可约|有课|排课/.test(text)) {
    return {
      text: `今天可约时间参考：\n${buildTodayAvailabilityText()}\n实际余位会随预约变化，页面里的时间段显示为准。`,
      actions: [{ label: "看时间段", target: "#booking-page" }]
    };
  }

  if (/价格|多少钱|收费|费用|课时|一节/.test(text)) {
    return {
      text: `当前课程价格：\n${buildPriceSupportText()}\n价格会随教练与课程强度不同，最终以预约页显示为准。`,
      actions: [{ label: "选择教练", target: "#coaches" }]
    };
  }

  if (coach) {
    return {
      text: buildCoachSupportText(coach),
      actions: [{ label: "看教练详情", target: "#coaches" }]
    };
  }

  if (/课程|项目|学什么|专项|专业|内容|区别/.test(text)) {
    return {
      text: `目前开放这些专业方向：\n${buildProgramsSupportText()}`,
      actions: [
        { label: "看课程", target: "#programs" },
        { label: "让AI推荐", target: "#ai-advisor" }
      ]
    };
  }

  if (/教练|老师|师资|冠军|谁教|介绍/.test(text) || coach) {
    return {
      text: `目前可约教练：${coaches.map((item) => item.nameCn).join("、")}。\n每位教练都有真实简介、成绩和视频，你也可以说“我想学太极/剑术/南拳/长拳”，我会直接推荐。`,
      actions: [{ label: "看教练详情", target: "#coaches" }]
    };
  }

  if (/推荐|适合|我想学|想练|太极|形意|南拳|南刀|南棍|朴刀|剑术|枪术|八卦|长拳|刀术|棍术|翻子|比赛|考级|升学|零基础|入门/.test(text)) {
    return {
      text: buildRecommendationSupportText(question),
      actions: [
        { label: "填写AI选课", target: "#ai-advisor" },
        { label: "看推荐教练", target: "#coaches" }
      ]
    };
  }

  if (/视频|演示|作品|训练片段|看一下/.test(text)) {
    return {
      text: "每位教练都有训练视频或精彩片段。你可以先看真实动作和专项风格，再决定是否预约体验课。",
      actions: [{ label: "看训练视频", target: "#videos" }]
    };
  }

  if (/地址|在哪|位置|到馆|上课地点|电话|联系|微信/.test(text)) {
    return {
      text: "你提交预约后，工作人员端会立即收到信息，并按你预留的电话确认具体到课信息。也可以把微信、到课时间偏好或其他问题写在AI选课的“其他想法”里。",
      actions: [{ label: "填写预约信息", target: "#ai-advisor" }],
      needsStaff: true
    };
  }

  if (/取消|改时间|换时间|改约|退款/.test(text)) {
    return {
      text: "如果要改时间或取消，请保留预约编号。提交预约后工作人员会电话确认，你可以在确认时说明改约需求。",
      actions: [{ label: "查看预约信息", target: "#booking-page" }],
      needsStaff: true
    };
  }

  return {
    text: "我理解你的问题了。你可以再具体说一下想学的项目、年龄基础、目标和可约时间；如果想更快完成匹配，直接去AI选课填写信息，会给出教练和课程建议。",
    actions: [
      { label: "AI选课", target: "#ai-advisor" },
      { label: "看课程", target: "#programs" },
      { label: "看时间", target: "#booking-page" }
    ],
    needsStaff: true
  };
}

function handleSupportQuestion(question) {
  const trimmed = question.trim();
  if (!trimmed) return;
  openSupportPanel();
  appendSupportMessage("user", trimmed);
  const reply = getSupportReply(trimmed);
  saveSupportExchange(trimmed, reply);
  window.setTimeout(() => appendSupportMessage("bot", reply.text, reply.actions), 160);
}

function createBookingId() {
  return `bk-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function getBookingById(id) {
  return state.bookings.find((booking, index) => (booking.id || String(index)) === id);
}

function getServiceModeLabel(mode) {
  return mode === "home" ? "上门教学" : "定点授课";
}

function getBookingLocationInput() {
  const serviceMode = bookingServiceMode?.value === "home" ? "home" : "fixed";
  const serviceAddress = bookingAddress?.value.trim() || "";
  return {
    serviceMode,
    serviceModeLabel: getServiceModeLabel(serviceMode),
    serviceAddress: serviceMode === "home" ? serviceAddress : "",
    homeTeachingNote: serviceMode === "home" ? homeTeachingNote : fixedTeachingNote
  };
}

function bookingLocationText(booking = {}) {
  const serviceMode = booking.serviceMode || (booking.serviceAddress ? "home" : "");
  const serviceModeLabel = booking.serviceModeLabel || (serviceMode ? getServiceModeLabel(serviceMode) : "");

  if (serviceMode === "home" || booking.serviceAddress) {
    return `${serviceModeLabel || "上门教学"}；${booking.homeTeachingNote || homeTeachingNote}；具体位置：${booking.serviceAddress || "待填写"}`;
  }

  if (serviceMode === "fixed") {
    return booking.homeTeachingNote || fixedTeachingNote;
  }

  return booking.homeTeachingNote || homeTeachingNote;
}

function syncHomeAddressField() {
  if (!bookingServiceMode || !homeAddressField || !bookingAddress) return;
  const isHome = bookingServiceMode.value === "home";
  homeAddressField.hidden = !isHome;
  bookingAddress.required = isHome;
  if (!isHome) {
    bookingAddress.value = "";
  }
}

function getCurrentBookingDraft() {
  const coach = getSelectedCoach();
  const selectedDate = upcomingDates[state.selectedDateIndex];
  const programText = programSelect.options[programSelect.selectedIndex]?.textContent || programs[0].nameCn;
  const location = getBookingLocationInput();
  const minor = minorSafetyRequired();

  return {
    coachName: coachLabel(coach),
    program: programText,
    date: selectedDate.value,
    dateLabel: selectedDate.label,
    day: selectedDate.day,
    slot: state.selectedSlot || "待选择",
    name: advisorName.value.trim() || "待填写",
    age: advisorAge.value || "待填写",
    gender: advisorGender.value || "待填写",
    phone: advisorPhone.value.trim() || "待填写",
    idCard: maskIdCard(advisorIdCard.value.trim()) || "签约/付款后补充",
    guardianName: minor ? guardianName.value.trim() : "",
    guardianPhone: minor ? guardianPhone.value.trim() : "",
    emergencyName: minor ? emergencyName.value.trim() : "",
    emergencyPhone: minor ? emergencyPhone.value.trim() : "",
    healthHistory: minor ? healthHistory.value.trim() : "",
    riskAcknowledged: minor ? Boolean(riskAcknowledged?.checked) : false,
    goal: advisorGoal.value.trim() || "待填写",
    ideas: advisorIdeas.value.trim() || "无",
    price: coach.price,
    ...location,
    paymentPlan: paymentPlan?.value || "",
    paymentPlanLabel: paymentPlanLabel(),
    paymentAmount: paymentPlanAmount(),
    paymentAmountCents: paymentPlanAmountCents(),
    paymentMethod: paymentMethod?.value || "",
    paymentMethodLabel: paymentMethodLabel(),
    paymentStatus: paymentInitialStatus(),
    status: isWechatNativePayment() ? "待支付" : "待跟进",
    agreementAccepted: Boolean(agreementAccepted?.checked),
    agreementName,
    agreementVersion,
    agreementCoachName: coach.nameCn
  };
}

function formatBookingMessage(booking) {
  return [
    "砺武堂预约信息",
    booking.id ? `预约编号：${booking.id}` : "",
    booking.orderId ? `订单编号：${booking.orderId}` : "",
    `学员：${booking.name || "待填写"}`,
    `电话：${booking.phone || "待填写"}`,
    `身份证号：${booking.idCardMasked || maskIdCard(booking.idCard) || "签约/付款后补充"}`,
    booking.age ? `年龄：${booking.age}` : "",
    booking.gender ? `性别：${booking.gender}` : "",
    booking.guardianName ? `监护人：${booking.guardianName} ${booking.guardianPhone || ""}` : "",
    booking.emergencyName ? `紧急联系人：${booking.emergencyName} ${booking.emergencyPhone || ""}` : "",
    booking.healthHistory ? `身体情况：${booking.healthHistory}` : "",
    `课程：${booking.program}`,
    `教练：${booking.coachName}`,
    `时间：${booking.dateLabel || booking.date} ${booking.day || ""} ${booking.slot}`,
    `上课方式：${bookingLocationText(booking)}`,
    `价格：${booking.price}`,
    `预约确认：${booking.paymentAmount || ""} · ${booking.paymentMethodLabel || "工作人员确认"} · ${booking.paymentStatus || "工作人员确认"}`,
    booking.wechatTransactionId ? `微信交易号：${booking.wechatTransactionId}` : "",
    booking.paidAt ? `支付完成时间：${booking.paidAt}` : "",
    `手机验证：已取消验证码，仅记录联系电话`,
    booking.goal ? `目标：${booking.goal}` : "",
    booking.ideas ? `想法：${booking.ideas}` : "",
    `协议：${booking.agreementAccepted ? `已阅读并同意《${booking.agreementName || agreementName}》（乙方教练：${booking.agreementCoachName || booking.coachName || "未记录"}，打开时间：${booking.agreementOpenedAt || "未记录"}，确认时间：${booking.agreementConfirmedAt || booking.agreementAt || "未记录"}）` : "未确认"}`,
    `状态：${booking.status || "待跟进"}`
  ].filter(Boolean).join("\n");
}

function toICSDate(date) {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function escapeICS(value) {
  return String(value || "")
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function downloadCalendarInvite(booking) {
  if (!booking || !booking.date || !booking.slot) {
    showToast("缺少日期或时间，暂时无法生成日历 / Missing date or time");
    return;
  }

  const [hour, minute] = booking.slot.split(":").map(Number);
  const start = new Date(`${booking.date}T00:00:00`);
  start.setHours(hour || 9, minute || 0, 0, 0);
  const end = new Date(start);
  end.setMinutes(end.getMinutes() + 60);

  const title = `砺武堂武术课 - ${booking.coachName}`;
  const description = formatBookingMessage(booking);
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Liwutang//Martial Arts Booking//CN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${escapeICS(booking.id || createBookingId())}@liwutang.local`,
    `DTSTAMP:${toICSDate(new Date())}`,
    `DTSTART:${toICSDate(start)}`,
    `DTEND:${toICSDate(end)}`,
    `SUMMARY:${escapeICS(title)}`,
    `DESCRIPTION:${escapeICS(description)}`,
    "LOCATION:静安馆 · 3号训练厅 Jing'an Studio",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `liwutang-${booking.id || booking.date}.ics`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("日历提醒已生成 / Calendar invite downloaded");
}

function isPaymentPaid(booking = {}) {
  return booking.paymentStatus === "已支付" || booking.wechatTradeState === "SUCCESS" || Boolean(booking.paidAt);
}

function bookingNeedsWechatPayment(booking = {}) {
  return booking.paymentProvider === "wechat" && booking.paymentMode === "native" && !isPaymentPaid(booking);
}

function renderPaymentCheckout(booking) {
  if (!bookingNeedsWechatPayment(booking)) return "";
  const qrCode = booking.paymentQrCodeDataUrl
    ? `<img src="${escapeHTML(booking.paymentQrCodeDataUrl)}" alt="微信支付二维码 WeChat Pay QR" />`
    : `<div class="payment-qr-placeholder">等待二维码<br />Waiting QR</div>`;
  const payLink = booking.paymentCodeUrl
    ? `<a href="${escapeHTML(booking.paymentCodeUrl)}" rel="noreferrer">手机端尝试打开微信支付</a>`
    : "";
  return `
    <div class="payment-checkout">
      <div class="payment-qr">${qrCode}</div>
      <div class="payment-checkout-copy">
        <p class="section-kicker">微信支付 WeChat Pay</p>
        <h4>扫码支付后预约正式生效</h4>
        <p>请使用微信扫描二维码完成 ${escapeHTML(booking.paymentAmount || "")} 定金支付。支付成功后系统会自动刷新，也可以手动点击下方按钮。</p>
        <div class="payment-checkout-actions">
          <button class="primary-btn" type="button" data-refresh-payment="${escapeHTML(booking.orderId || "")}">我已支付，刷新状态</button>
          ${payLink}
        </div>
      </div>
    </div>
  `;
}

function mergeBookingInState(update = {}) {
  if (!update.id && !update.orderId) return null;
  const index = state.bookings.findIndex((booking) => (update.id && booking.id === update.id) || (update.orderId && booking.orderId === update.orderId));
  if (index === -1) return null;
  state.bookings[index] = { ...state.bookings[index], ...update };
  const availabilityIndex = state.availabilityBookings.findIndex((booking) => (update.id && booking.id === update.id) || (update.orderId && booking.orderId === update.orderId));
  if (availabilityIndex >= 0) state.availabilityBookings[availabilityIndex] = { ...state.availabilityBookings[availabilityIndex], ...update };
  saveBookings();
  renderBookings();
  return state.bookings[index];
}

async function refreshPaymentStatus(orderId, { silent = false } = {}) {
  if (!orderId) return null;
  try {
    const result = await fetchPaymentStatus(orderId);
    const updated = mergeBookingInState(result?.booking || {});
    if (updated && postBookingPanel && !postBookingPanel.hidden && postBookingPanel.textContent.includes(orderId)) {
      renderPostBookingPanel(updated);
    }
    if (updated && isPaymentPaid(updated)) {
      window.clearInterval(paymentPollingTimer);
      paymentPollingTimer = null;
      showToast("支付成功，预约已正式确认 / Payment confirmed");
    } else if (!silent) {
      showToast(updated?.paymentStatus || "暂未查询到支付成功，请稍后再试");
    }
    return updated;
  } catch (error) {
    if (!silent) showToast(error.message || "支付状态查询失败");
    return null;
  }
}

function startPaymentPolling(orderId) {
  if (!orderId || !apiEnabled) return;
  window.clearInterval(paymentPollingTimer);
  let checks = 0;
  paymentPollingTimer = window.setInterval(async () => {
    checks += 1;
    const updated = await refreshPaymentStatus(orderId, { silent: true });
    if (updated && isPaymentPaid(updated)) return;
    if (checks >= 36) {
      window.clearInterval(paymentPollingTimer);
      paymentPollingTimer = null;
    }
  }, 5000);
}

function renderPostBookingPanel(booking) {
  if (!postBookingPanel || !booking) return;
  const bookingId = booking.id || "";
  const needsPayment = bookingNeedsWechatPayment(booking);
  const paid = isPaymentPaid(booking);
  postBookingPanel.hidden = false;
  postBookingPanel.innerHTML = `
    <article class="post-booking-card">
      <div class="post-booking-head">
        <div>
          <p class="section-kicker">${needsPayment ? "等待支付 Payment Pending" : "预约成功 Booking Confirmed"}</p>
          <h3>${escapeHTML(booking.name)}，${needsPayment ? "请完成定金支付" : "体验课已记录"}</h3>
          <span>${needsPayment ? "预约信息已生成，完成在线支付后正式生效并同步确认。" : "预约信息已生成并同步到工作人员端，工作人员会按预留电话联系确认。"}</span>
        </div>
        <strong>${paid ? "已支付" : needsPayment ? "待支付" : "已提交"}</strong>
      </div>

      <div class="post-booking-summary">
        <div>
          <span>编号 ID</span>
          <strong>${escapeHTML(booking.id || "待生成")}</strong>
        </div>
        <div>
          <span>订单 Order</span>
          <strong>${escapeHTML(booking.orderId || "待生成")}</strong>
        </div>
        <div>
          <span>课程 Program</span>
          <strong>${escapeHTML(booking.program)}</strong>
        </div>
        <div>
          <span>教练 Coach</span>
          <strong>${escapeHTML(booking.coachName)}</strong>
        </div>
        <div>
          <span>身份证号 ID</span>
          <strong>${escapeHTML(booking.idCardMasked || maskIdCard(booking.idCard) || "签约/付款后补充")}</strong>
        </div>
        <div>
          <span>时间 Time</span>
          <strong>${escapeHTML(`${booking.dateLabel || booking.date} ${booking.day || ""} ${booking.slot}`)}</strong>
        </div>
        <div>
          <span>可上门 Home Visit</span>
          <strong>${escapeHTML(bookingLocationText(booking))}</strong>
        </div>
        <div>
          <span>价格 Price</span>
          <strong>${escapeHTML(booking.price)}</strong>
        </div>
        <div>
          <span>定金 Payment</span>
          <strong>${escapeHTML(`${booking.paymentAmount || ""} · ${booking.paymentStatus || "工作人员确认"}`)}</strong>
        </div>
        <div>
          <span>服务协议 Agreement</span>
          <strong>${booking.agreementAccepted ? `已确认 · ${escapeHTML(booking.agreementConfirmedAt || booking.agreementAt || "")}` : "未确认 Pending"}</strong>
        </div>
        <div>
          <span>手机 Phone</span>
          <strong>已记录联系方式</strong>
        </div>
      </div>

      ${renderPaymentCheckout(booking)}

      <div class="post-booking-finish">
        <strong>${needsPayment ? "支付完成后预约生效" : "预约已完成"}</strong>
        <p>${needsPayment ? "请在本页完成微信支付。支付成功会写入订单、协议证据链和工作人员后台。" : "工作人员端已收到预约消息与协议确认记录，请保留本页预约编号，到馆或电话确认时出示即可。"}</p>
      </div>
    </article>
  `;
}

function copyText(text, successMessage) {
  const fallbackCopy = () => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    showToast(successMessage);
  };

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .then(() => showToast(successMessage))
      .catch(fallbackCopy);
    return;
  }

  fallbackCopy();
}

function shareText(text) {
  if (navigator.share) {
    navigator.share({ title: "砺武堂预约咨询", text })
      .then(() => showToast("已打开分享 / Share opened"))
      .catch(() => copyText(text, "已复制咨询信息 / Inquiry copied"));
    return;
  }

  copyText(text, "已复制咨询信息 / Inquiry copied");
}

function csvCell(value) {
  return `"${String(value || "").replace(/"/g, '""')}"`;
}

function exportBookingCSV() {
  if (!state.bookings.length) {
    showToast("暂无预约可导出 / No bookings to export");
    return;
  }

  const headers = ["预约编号", "订单编号", "状态", "姓名", "电话", "身份证号脱敏", "年龄", "监护人", "紧急联系人", "身体情况", "课程", "教练", "日期", "星期", "时间", "价格", "定金", "支付方式", "支付状态", "微信交易号", "支付完成时间", "上课方式", "具体位置", "地点说明", "服务协议", "协议乙方教练", "协议版本", "协议确认时间", "协议打开时间", "手机号记录", "目标", "备注", "创建时间"];
  const rows = state.bookings.map((booking) => [
    booking.id || "",
    booking.orderId || "",
    getBookingStatus(booking),
    booking.name,
    booking.phone,
    booking.idCardMasked || maskIdCard(booking.idCard) || "",
    booking.age || "",
    booking.guardianName || "",
    booking.emergencyName || "",
    booking.healthHistory || "",
    booking.program,
    booking.coachName,
    booking.date || booking.dateLabel,
    booking.day,
    booking.slot,
    booking.price,
    booking.paymentAmount || "",
    booking.paymentMethodLabel || "",
    booking.paymentStatus || "",
    booking.wechatTransactionId || "",
    booking.paidAt || "",
    booking.serviceModeLabel || "",
    booking.serviceAddress || "",
    bookingLocationText(booking),
    booking.agreementAccepted ? "已阅读并同意" : "未确认",
    booking.agreementCoachName || "",
    booking.agreementVersion || "",
    booking.agreementAt || "",
    booking.agreementOpenedAt || "",
    "验证码已取消",
    booking.goal || "",
    booking.ideas || "",
    booking.createdAt || ""
  ]);
  const csv = [headers, ...rows].map((row) => row.map(csvCell).join(",")).join("\n");
  const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `liwutang-bookings-${toLocalDateValue(new Date())}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("预约名单已导出 / Bookings exported");
}

function selectProgram(programName) {
  const matchingProgram = Array.from(programSelect.options).find((option) => option.value === programName);
  if (matchingProgram) programSelect.value = matchingProgram.value;
  scrollToBooking();
  showToast(`${programName} 已带入预约表 / Program selected`);
}

function selectCoachForBooking(coachId, options = {}) {
  const shouldScroll = options.scroll !== false;
  if (state.selectedCoachId !== coachId) resetAgreementConfirmation();
  state.selectedCoachId = coachId;
  state.selectedDateIndex = 0;
  state.selectedSlot = "";
  renderSelectors();
  renderDates();
  renderSlots();
  if (shouldScroll) scrollToBooking();
}

function getAdvisorInput() {
  return {
    name: advisorName.value.trim(),
    age: Number(advisorAge.value),
    gender: advisorGender.value,
    phone: advisorPhone.value.trim(),
    idCard: maskIdCard(advisorIdCard.value.trim()),
    guardianName: guardianName.value.trim(),
    guardianPhone: guardianPhone.value.trim(),
    emergencyName: emergencyName.value.trim(),
    emergencyPhone: emergencyPhone.value.trim(),
    healthHistory: healthHistory.value.trim(),
    riskAcknowledged: Boolean(riskAcknowledged?.checked),
    program: advisorProgram.value,
    goal: advisorGoal.value.trim(),
    ideas: advisorIdeas.value.trim()
  };
}

function scoreAdvisorProfile(profile, input) {
  const combined = normalizeText(`${input.program} ${input.goal} ${input.ideas} ${input.gender}`);
  let score = profile.keywords.reduce((total, keyword) => total + (combined.includes(keyword.toLowerCase()) ? 3 : 0), 0);

  if (/零基础|新手|入门|没学过|启蒙|基础/.test(combined)) {
    score += { li: 2, zhu: 1, guo: 2, zhang: 1 }[profile.coachId] || 0;
  }

  if (input.age && input.age <= 13) {
    score += profile.coachId === "li" && /比赛|竞赛|竞技|长拳|套路/.test(combined) ? 4 : 0;
    score += profile.coachId === "li" ? 2 : 0;
  }

  if (input.age && input.age >= 45 && profile.coachId === "guo") {
    score += 3;
  }

  if (/南拳|南刀|南棍|朴刀|全运会|运动健将|六段/.test(combined) && profile.coachId === "zhu") {
    score += 8;
  }

  if (/形意|形意拳|自选太极|全国冠军|冠军赛|锦标赛|北京队|健将/.test(combined) && profile.coachId === "guo") {
    score += 8;
  }

  if (/太极/.test(combined) && /比赛|竞赛|冠军|专业|提高|套路|自选/.test(combined) && profile.coachId === "guo") {
    score += 6;
  }

  if (/剑术|枪术|八卦掌|八卦|世界冠军|世锦赛|世界武术锦标赛|世界杯|国际级/.test(combined) && profile.coachId === "zhang") {
    score += 10;
  }

  if (/比赛|竞赛|冠军|专业|升学|考级/.test(combined) && profile.coachId === "li") {
    score += 6;
  }

  if (/柔韧|协调|体能|力量|爆发|腾空/.test(combined) && ["li", "zhu"].includes(profile.coachId)) {
    score += 2;
  }

  return score;
}

function buildAdvisorRecommendation(input) {
  const ranked = advisorProfiles
    .filter((profile) => professionalCoachIds.has(profile.coachId))
    .map((profile) => ({ ...profile, score: scoreAdvisorProfile(profile, input) }))
    .sort((a, b) => b.score - a.score);
  const best = ranked[0];
  const coach = coaches.find((item) => item.id === best.coachId) || coaches[0];
  const professionalProgramName = {
    li: "竞技武术套路",
    zhu: "南拳与南派器械",
    guo: "太极拳与形意拳",
    zhang: "剑术枪术八卦掌"
  }[best.coachId] || best.programName;
  const program = programs.find((item) => item.nameCn === professionalProgramName) || programs[0];
  const confidence = Math.min(96, Math.max(78, 78 + best.score * 2));
  const ageNote =
    input.age && input.age <= 13
      ? "年龄偏低阶段，训练会优先考虑兴趣、纪律和身体协调。"
      : input.age && input.age >= 45
        ? "训练会优先考虑关节友好、节奏稳定和长期坚持。"
        : "训练会优先结合目标强度、基础水平和可持续进阶。";

  return {
    coach,
    program,
    profile: best,
    confidence,
    ageNote
  };
}

function renderAdvisorResult(input, recommendation) {
  const { coach, program, profile, confidence, ageNote } = recommendation;
  advisorResult.innerHTML = `
    <p class="section-kicker">推荐结果 Recommendation</p>
    <div class="result-card">
      <div class="result-score">
        <span>匹配度 Match</span>
        <strong>${confidence}%</strong>
      </div>
      <div>
        <h3>${coach.nameCn} <em>${coach.nameEn}</em></h3>
        <p>${coach.titleCn} · ${coach.titleEn}</p>
      </div>
      <div class="result-program">
        <span>推荐课程 Program</span>
        <strong>${program.nameCn} · ${program.nameEn}</strong>
      </div>
      <p>${escapeHTML(input.name)}，AI建议你先跟 ${coach.nameCn} 开始训练。</p>
      <p>${profile.reasonCn}</p>
      <p>${ageNote}</p>
      <p class="en">${profile.projectEn} is the closest path for your current goal.</p>
      <div class="result-plan">
        <span>训练建议 Training Path</span>
        <strong>${profile.pathCn}</strong>
      </div>
      <div class="result-actions">
        <button class="primary-btn full" type="button" data-apply-advisor data-coach-id="${coach.id}" data-program-name="${program.nameCn}">
          确认这个教练并选择时间 Confirm Coach
        </button>
      </div>
    </div>
  `;
}

function applyAdvisorRecommendation(button) {
  const coachId = button.dataset.coachId;
  const programName = button.dataset.programName;

  selectCoachForBooking(coachId);
  const matchingProgram = Array.from(programSelect.options).find((option) => option.value === programName);
  if (matchingProgram) programSelect.value = matchingProgram.value;
  showToast("AI推荐已带入预约表 / Recommendation applied");
}

function scrollToBooking() {
  document.querySelector("#booking-card").scrollIntoView({ behavior: "smooth", block: "center" });
}

function openVideo(videoId) {
  const allVideos = coaches.flatMap((coach) =>
    coach.videos.map((video, index) => ({
      ...video,
      id: `${coach.id}-${index}`,
      coachId: coach.id,
      coachName: coachLabel(coach),
      poster: video.poster || coach.photo || "assets/ink-hero.png"
    }))
  );
  const video = allVideos.find((item) => item.id === videoId);
  if (!video) return;
  state.activeVideoCoachId = video.coachId;

  modalVideo.pause();
  modalVideo.removeAttribute("src");
  modalVideo.load();
  modalCoach.textContent = video.coachName;
  modalTitle.textContent = `${video.titleCn} · ${video.titleEn}`;
  modalTopic.textContent = `${video.topicCn} / ${video.topicEn}`;
  modalDuration.textContent = video.duration;
  modalPoster.src = video.poster;
  modalPoster.alt = `${video.titleCn} ${video.titleEn}`;
  modalPoster.hidden = Boolean(video.src);
  modalVideo.hidden = !video.src;
  if (video.src) {
    modalVideo.src = video.src;
    modalVideo.poster = video.poster;
    modalVideo.preload = "auto";
    modalVideo.load();
  }
  modalReel.classList.remove("is-playing");
  modalReel.classList.toggle("has-real-video", Boolean(video.src));
  document.body.classList.toggle("video-open", Boolean(video.src));
  playToggle.textContent = video.src ? "播放视频 Play Video" : "播放 Play";
  timelineProgress.style.animation = "none";
  videoModal.showModal();
}

function updateScrollRatio() {
  const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
  const ratio = Math.min(window.scrollY / max, 1).toFixed(3);
  document.documentElement.style.setProperty("--scroll-ratio", ratio);
}

function bindEvents() {
  coachFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    state.activeFilter = button.dataset.filter;
    renderFilters();
    renderCoaches();
  });

  coachGrid.addEventListener("click", (event) => {
    const bookButton = event.target.closest("[data-book-coach]");
    const coachVideoLink = event.target.closest("[data-coach-video-id]");
    const videoButton = event.target.closest("[data-video-coach]");
    if (bookButton) {
      selectCoachForBooking(bookButton.dataset.bookCoach);
      return;
    }
    if (coachVideoLink) {
      openVideo(coachVideoLink.dataset.coachVideoId);
      return;
    }
    if (videoButton) {
      const coach = coaches.find((item) => item.id === videoButton.dataset.videoCoach);
      if (coach) openVideo(`${coach.id}-0`);
    }
  });

  videoGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-video-id]");
    if (button) openVideo(button.dataset.videoId);
  });

  programGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-program-name]");
    if (button) selectProgram(button.dataset.programName);
  });

  coachSelect.addEventListener("change", (event) => {
    if (state.selectedCoachId !== event.target.value) resetAgreementConfirmation();
    state.selectedCoachId = event.target.value;
    state.selectedSlot = "";
    renderSlots();
  });

  dateStrip.addEventListener("click", (event) => {
    const button = event.target.closest("[data-date-index]");
    if (!button) return;
    state.selectedDateIndex = Number(button.dataset.dateIndex);
    state.selectedSlot = "";
    renderDates();
    renderSlots();
  });

  slotGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-slot]");
    if (!button) return;
    if (button.disabled) {
      showToast("这个时间段已约满 / This slot is full");
      return;
    }
    state.selectedSlot = button.dataset.slot;
    renderSlots();
  });

  bookingServiceMode?.addEventListener("change", syncHomeAddressField);
  paymentMethod?.addEventListener("change", () => {
    if (isWechatNativePayment()) refreshPaymentConfig({ silent: false });
  });
  advisorAge?.addEventListener("input", syncMinorSafetyPanel);
  advisorAge?.addEventListener("change", syncMinorSafetyPanel);
  minorSafetyToggle?.addEventListener("click", () => {
    setMinorSafetyExpanded(minorSafetyToggle.getAttribute("aria-expanded") !== "true");
  });
  [advisorName, advisorAge, advisorGender, advisorPhone, advisorIdCard, guardianName, guardianPhone, emergencyName, emergencyPhone, healthHistory, riskAcknowledged, advisorGoal, advisorIdeas, bookingAddress, paymentMethod, paymentAcknowledged].forEach((field) => {
    field?.addEventListener("input", () => clearFieldError(field));
    field?.addEventListener("change", () => clearFieldError(field));
  });

  bookingForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const coach = getSelectedCoach();
    const selectedDate = upcomingDates[state.selectedDateIndex];
    const name = advisorName.value.trim();
    const phone = normalizePhone(advisorPhone.value);
    const idCardRaw = advisorIdCard.value.trim();
    const location = getBookingLocationInput();

    if (isWechatNativePayment()) {
      await refreshPaymentConfig({ silent: true });
    }

    const bookingValidationMessages = validateBookingFields(location);
    if (bookingValidationMessages.length) {
      showBookingValidation(bookingValidationMessages);
      return;
    }

    await refreshBookingsFromServer({ silent: true });

    const availability = getSlotAvailability(coach, selectedDate.value, state.selectedSlot);
    if (availability.isFull) {
      renderSlots();
      showBookingRequirement("这个时间段已约满，请换一个时间 / This slot is full");
      return;
    }

    const duplicateBooking = state.bookings.find((booking) => {
      const sameCoach = booking.coachId ? booking.coachId === coach.id : String(booking.coachName || "").includes(coach.nameCn);
      return sameCoach && booking.date === selectedDate.value && booking.slot === state.selectedSlot && booking.phone === phone;
    });

    if (duplicateBooking) {
      renderPostBookingPanel(duplicateBooking);
      postBookingPanel.scrollIntoView({ behavior: "smooth", block: "center" });
      showToast("该手机号已预约这个时间 / This phone already booked the slot");
      return;
    }

    const booking = {
      id: createBookingId(),
      orderId: `ord-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      coachId: coach.id,
      coachName: coachLabel(coach),
      programName: programSelect.value,
      program: programSelect.options[programSelect.selectedIndex].textContent,
      date: selectedDate.value,
      dateLabel: selectedDate.label,
      day: selectedDate.day,
      slot: state.selectedSlot,
      name,
      phone,
      idCard: "",
      idCardMasked: maskIdCard(idCardRaw),
      idCardLast4: idCardRaw ? idCardRaw.slice(-4) : "",
      age: advisorAge.value,
      gender: advisorGender.value,
      isMinor: isMinorAge(advisorAge.value),
      guardianName: minorSafetyRequired() ? guardianName.value.trim() : "",
      guardianPhone: minorSafetyRequired() ? guardianPhone.value.trim() : "",
      emergencyName: minorSafetyRequired() ? emergencyName.value.trim() : "",
      emergencyPhone: minorSafetyRequired() ? emergencyPhone.value.trim() : "",
      healthHistory: minorSafetyRequired() ? healthHistory.value.trim() : "",
      riskAcknowledged: minorSafetyRequired() ? Boolean(riskAcknowledged?.checked) : false,
      guardianPresenceRequired: isMinorAge(advisorAge.value) && location.serviceMode === "home",
      goal: advisorGoal.value.trim(),
      ideas: advisorIdeas.value.trim(),
      price: coach.price,
      paymentPlan: paymentPlan?.value || "",
      paymentPlanLabel: paymentPlanLabel(),
      paymentAmount: paymentPlanAmount(),
      paymentAmountCents: paymentPlanAmountCents(),
      paymentMethod: paymentMethod?.value || "",
      paymentMethodLabel: paymentMethodLabel(),
      paymentProvider: isWechatNativePayment() ? "wechat" : "",
      paymentMode: isWechatNativePayment() ? "native" : "",
      paymentStatus: paymentInitialStatus(),
      paymentAcknowledged: Boolean(paymentAcknowledged?.checked),
      ...location,
      agreementAccepted: true,
      agreementName,
      agreementVersion,
      policyVersion,
      cancellationPolicyText,
      refundPolicyText,
      safetyPolicyText,
      agreementCoachName: coach.nameCn,
      agreementFile,
      agreementOpenedAt: agreementState.openedAt,
      agreementConfirmedAt: agreementState.confirmedAt,
      agreementConfirmationText,
      agreementConfirmAction: "顾客在当前预约页面内嵌协议底部点击“我已完整阅读并确认”按钮",
      agreementAt: agreementState.confirmedAt,
      phoneVerifiedAt: "",
      phoneVerifiedPhone: phone,
      phoneVerificationToken: "",
      phoneVerificationMethod: "not-required",
      status: isWechatNativePayment() ? "待支付" : "待跟进",
      createdAt: new Date().toLocaleString("zh-CN", { hour12: false })
    };
    booking.agreementSnapshotText = buildAgreementSnapshotText(booking);

    let savedBooking = booking;
    try {
      savedBooking = await createBookingOnServer(booking);
    } catch (error) {
      if (error.status === 409 && error.payload?.booking) {
        renderPostBookingPanel(error.payload.booking);
        postBookingPanel.scrollIntoView({ behavior: "smooth", block: "center" });
        showToast("该手机号已预约这个时间 / This phone already booked the slot");
        return;
      }
      if (isWechatNativePayment(booking.paymentMethod)) {
        const message = error.message || "微信支付下单失败，请工作人员检查支付配置";
        setBookingNotice(message, true);
        showToast(message);
        return;
      }
      showToast("服务器暂时不可用，预约已保存在本机 / Saved locally for now");
    }

    state.bookings = state.bookings.filter((item) => item.id !== savedBooking.id);
    state.bookings.unshift(savedBooking);
    state.bookings = state.bookings.slice(0, 100);
    state.availabilityBookings = state.availabilityBookings.filter((item) => item.id !== savedBooking.id);
    state.availabilityBookings.unshift(savedBooking);
    saveBookings();
    renderBookings();
    renderPostBookingPanel(savedBooking);
    renderSlots();
    postBookingPanel.scrollIntoView({ behavior: "smooth", block: "center" });
    if (isWechatNativePayment(savedBooking.paymentMethod) && savedBooking.paymentStatus !== "已支付") {
      startPaymentPolling(savedBooking.orderId);
      showToast("请完成微信扫码支付，支付后预约正式生效");
    } else {
      showToast("预约已提交，工作人员端已同步 / Booking sent to staff");
    }
  });

  clearBookings.addEventListener("click", () => {
    state.bookings = [];
    saveBookings();
    renderBookings();
    if (postBookingPanel) {
      postBookingPanel.hidden = true;
      postBookingPanel.innerHTML = "";
    }
    showToast("预约记录已清空 / Bookings cleared");
  });

  copyLatestBooking.addEventListener("click", () => {
    const booking = state.bookings[0];
    if (!booking) {
      copyText(formatBookingMessage(getCurrentBookingDraft()), "已复制当前咨询 / Current inquiry copied");
      return;
    }

    copyText(formatBookingMessage(booking), "最新预约已复制 / Latest booking copied");
  });

  exportBookings.addEventListener("click", exportBookingCSV);

  bookingSearch.addEventListener("input", (event) => {
    state.bookingSearch = event.target.value;
    renderBookings();
  });

  bookingStatusFilter.addEventListener("change", (event) => {
    state.bookingStatusFilter = event.target.value;
    renderBookings();
  });

  bookingList.addEventListener("click", async (event) => {
    const copyButton = event.target.closest("[data-copy-booking]");
    const calendarButton = event.target.closest("[data-calendar-booking]");
    const deleteButton = event.target.closest("[data-delete-booking]");

    if (copyButton) {
      const booking = getBookingById(copyButton.dataset.copyBooking);
      if (booking) copyText(formatBookingMessage(booking), "预约信息已复制 / Booking copied");
      return;
    }

    if (calendarButton) {
      const booking = getBookingById(calendarButton.dataset.calendarBooking);
      if (booking) downloadCalendarInvite(booking);
      return;
    }

    if (deleteButton) {
      const id = deleteButton.dataset.deleteBooking;
      state.bookings = state.bookings.filter((booking, index) => (booking.id || String(index)) !== id);
      saveBookings();
      deleteBookingOnServer(id).catch(() => {});
      renderBookings();
      renderSlots();
      showToast("预约已删除 / Booking deleted");
    }
  });

  bookingList.addEventListener("change", async (event) => {
    const statusSelect = event.target.closest("[data-status-select]");
    if (!statusSelect) return;
    const booking = getBookingById(statusSelect.dataset.statusSelect);
    if (!booking) return;
    booking.status = statusSelect.value;
    saveBookings();
    patchBookingOnServer(booking.id, { status: booking.status }).catch(() => {});
    renderBookings();
    renderSlots();
    if (postBookingPanel && !postBookingPanel.hidden && postBookingPanel.textContent.includes(booking.id || "")) {
      renderPostBookingPanel(booking);
    }
    showToast("跟进状态已更新 / Status updated");
  });

  if (postBookingPanel) {
    postBookingPanel.addEventListener("click", (event) => {
      const copyButton = event.target.closest("[data-post-copy]");
      const shareButton = event.target.closest("[data-post-share]");
      const calendarButton = event.target.closest("[data-post-calendar]");
      const recordsButton = event.target.closest("[data-post-records]");
      const nextButton = event.target.closest("[data-post-next]");
      const refreshPaymentButton = event.target.closest("[data-refresh-payment]");

      if (refreshPaymentButton) {
        refreshPaymentStatus(refreshPaymentButton.dataset.refreshPayment, { silent: false });
        return;
      }

      if (copyButton) {
        const booking = getBookingById(copyButton.dataset.postCopy) || state.bookings[0];
        if (booking) copyText(formatBookingMessage(booking), "预约信息已复制 / Booking copied");
        return;
      }

      if (shareButton) {
        const booking = getBookingById(shareButton.dataset.postShare) || state.bookings[0];
        if (booking) shareText(formatBookingMessage(booking));
        return;
      }

      if (calendarButton) {
        const booking = getBookingById(calendarButton.dataset.postCalendar) || state.bookings[0];
        if (booking) downloadCalendarInvite(booking);
        return;
      }

      if (recordsButton) {
        document.querySelector("#my-bookings").scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      if (nextButton) {
        state.selectedSlot = "";
        renderSlots();
        scrollToBooking();
        showToast("可以继续选择下一节时间 / Choose another time");
      }
    });
  }

  copyConsultation.addEventListener("click", () => {
    const booking = state.bookings[0] || getCurrentBookingDraft();
    copyText(formatBookingMessage(booking), "咨询话术已复制 / Inquiry copied");
  });

  shareConsultation.addEventListener("click", () => {
    const booking = state.bookings[0] || getCurrentBookingDraft();
    shareText(formatBookingMessage(booking));
  });

  advisorForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = getAdvisorInput();
    const validationMessages = validateAdvisorFields({ includeIntent: true });

    if (validationMessages.length) {
      renderAdvisorValidation(validationMessages);
      showToast("请先补全标红的信息 / Complete highlighted fields");
      return;
    }

    const recommendation = buildAdvisorRecommendation(input);
    renderAdvisorResult(input, recommendation);
    selectCoachForBooking(recommendation.coach.id, { scroll: false });
    const matchingProgram = Array.from(programSelect.options).find((option) => option.value === recommendation.program.nameCn);
    if (matchingProgram) programSelect.value = matchingProgram.value;
    renderSlots();
    showToast("AI已生成推荐，结果在右侧 / Recommendation ready");
  });

  advisorResult.addEventListener("click", (event) => {
    const applyButton = event.target.closest("[data-apply-advisor]");
    const copyButton = event.target.closest("[data-copy-advisor]");
    const watchButton = event.target.closest("[data-watch-advisor]");
    if (applyButton) {
      applyAdvisorRecommendation(applyButton);
      return;
    }
    if (copyButton) {
      copyText(advisorResult.innerText.trim(), "推荐方案已复制 / Plan copied");
      return;
    }
    if (watchButton) {
      openVideo(`${watchButton.dataset.watchAdvisor}-0`);
    }
  });

  document.querySelectorAll("[data-scroll-target]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(button.dataset.scrollTarget).scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });

  openAgreement?.addEventListener("click", openAgreementModal);
  closeAgreement?.addEventListener("click", closeAgreementModal);
  agreeFromModal?.addEventListener("click", confirmAgreementFromModal);
  agreementAccepted?.addEventListener("click", (event) => {
    if (agreementAccepted.checked && !agreementState.confirmedAt) {
      event.preventDefault();
      agreementAccepted.checked = false;
      openAgreementModal();
      showToast("请先打开协议并点击底部确认 / Please confirm inside agreement");
      return;
    }

    if (!agreementAccepted.checked) {
      agreementState.confirmedAt = "";
    }
  });
  [advisorName, advisorPhone, advisorIdCard, guardianName, guardianPhone, emergencyName, emergencyPhone, healthHistory, riskAcknowledged, paymentPlan, paymentMethod, paymentAcknowledged].forEach((input) => {
    input?.addEventListener("input", () => {
      resetAgreementConfirmation();
      if (agreementModal && !agreementModal.hidden) renderAgreementDocument();
    });
  });

  if (supportToggle && supportPanel) {
    supportToggle.addEventListener("click", () => {
      if (supportPanel.hidden) {
        openSupportPanel();
        return;
      }
      closeSupportPanel();
    });
  }

  if (supportClose) {
    supportClose.addEventListener("click", closeSupportPanel);
  }

  if (supportForm) {
    supportForm.addEventListener("submit", (event) => {
      event.preventDefault();
      handleSupportQuestion(supportInput.value);
      supportInput.value = "";
    });
  }

  document.addEventListener("click", (event) => {
    const questionButton = event.target.closest("[data-support-question]");
    const targetButton = event.target.closest("[data-support-target]");

    if (questionButton) {
      handleSupportQuestion(questionButton.dataset.supportQuestion);
      return;
    }

    if (targetButton) {
      closeSupportPanel();
      document.querySelector(targetButton.dataset.supportTarget)?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });

  closeModal.addEventListener("click", () => videoModal.close());

  bookFromVideo.addEventListener("click", () => {
    videoModal.close();
    selectCoachForBooking(state.activeVideoCoachId);
    showToast("已带入视频教练 / Coach selected");
  });

  playToggle.addEventListener("click", () => {
    if (!modalVideo.hidden && modalVideo.src) {
      if (modalVideo.paused) {
        modalVideo.play();
        modalReel.classList.add("is-playing");
        playToggle.textContent = "暂停 Pause";
        return;
      }
      modalVideo.pause();
      modalReel.classList.remove("is-playing");
      playToggle.textContent = "播放视频 Play Video";
      return;
    }

    const isPlaying = modalReel.classList.toggle("is-playing");
    playToggle.textContent = isPlaying ? "暂停 Pause" : "播放 Play";
    if (isPlaying) timelineProgress.style.animation = "";
  });

  videoModal.addEventListener("close", () => {
    modalVideo.pause();
    document.body.classList.remove("video-open");
    modalReel.classList.remove("is-playing");
    playToggle.textContent = "播放 Play";
  });

  window.addEventListener("scroll", updateScrollRatio, { passive: true });
}

function placeBookingCard() {
  const bookingCard = document.querySelector("#booking-card");
  if (!bookingCard || !bookingPageBody || bookingCard.parentElement === bookingPageBody) return;
  bookingPageBody.appendChild(bookingCard);
}

function init() {
  placeBookingCard();
  renderFilters();
  renderCoaches();
  renderVideos();
  renderPrograms();
  renderSelectors();
  renderDates();
  renderSlots();
  syncHomeAddressField();
  syncMinorSafetyPanel();
  renderBookings();
  bindEvents();
  refreshPaymentConfig({ silent: true });
  refreshBookingsFromServer({ silent: true });
  appendSupportMessage("bot", "您好，我是砺武堂智能客服。可以问我教练、课程、价格、可约时间和预约流程。", [
    { label: "怎么预约", question: "怎么预约课程？" },
    { label: "今天可约时间", question: "今天还有哪些时间可以约？" }
  ]);
  updateScrollRatio();
}

init();
