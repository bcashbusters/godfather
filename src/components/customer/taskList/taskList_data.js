import UsersInfo from '../../../mock/userinfo';
import Levels from '../../../mock/levels';

const user =UsersInfo['yogesh'];
const tasks = Levels[user.level.id].tasks.map((task)=>{
  if(user.level[task.id] === 'true'){
    task.isCompleted = true;
  }
});

export  default tasks;