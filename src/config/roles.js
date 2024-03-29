const allRoles = {
  student: [
    'getSubjects',
    'getTopics',
    'manageQAs',
    'getQAs',
    'getNoti',
    'getBanks',
    'manageBanks',
    'manageSubmissions',
    'getSubmissions',
    'managePayments',
    'getPayments',
    'manageTimeLearning',
    'getTimeLearnings',
    'updateTimeLearningByStudentAndSubject',
    'getByStudentInCurrentWeek',
    'getByMultiSubject',
  ],
  teacher: [
    'getSubjects',
    'manageSubjects',
    'manageFiles',
    'getFiles',
    'getTopics',
    'manageTopics',
    'getBanks',
    'manageBanks',
    'manageQAs',
    'getQAs',
    'manageNoti',
    'getNoti',
    'manageSubmissions',
    'getSubmissions',
    'getTimeLearnings',
    'getByStudentInCurrentWeek',
    'getByMultiSubject',
    'create-by-file',
  ],
  leadership: [
    'getUsers',
    'manageUsers',
    'getSubjects',
    'manageSubjects',
    'manageFiles',
    'getFiles',
    'getTopics',
    'manageTopics',
    'getBanks',
    'manageBanks',
    'manageQAs',
    'getQAs',
    'manageNoti',
    'getNoti',
    'manageSubmissions',
    'getSubmissions',
    'managePayments',
    'getPayments',
    'getTimeLearnings',
    'getByStudentInCurrentWeek',
    'getByMultiSubject',
    'create-by-file',
  ],
  admin: [
    'getUsers',
    'manageUsers',
    'getSubjects',
    'manageSubjects',
    'manageFiles',
    'getFiles',
    'getTopics',
    'manageTopics',
    'getBanks',
    'manageBanks',
    'manageQAs',
    'getQAs',
    'manageNoti',
    'getNoti',
    'manageSubmissions',
    'getSubmissions',
    'getTimeLearnings',
    'getByStudentInCurrentWeek',
    'getByMultiSubject',
  ],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
