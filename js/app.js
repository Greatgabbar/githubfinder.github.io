const github=new GitHub;
const ui=new Ui;
const searchUser=document.getElementById('searchUser');
searchUser.addEventListener('keyup',(e)=>{
  const text=e.target.value;
  if(text!==''){
    github.getUser(text)
      .then(data=>{
          if(data.profileData.message==="Not Found"){
            ui.showAlert('PLz Say To User Register First','alert alert-danger')
          }else{
            ui.showProfile(data.profileData);
            ui.showRepo(data.repodata);
          }
      });
  }else{
    //clear profile;
    ui.clearProfile();
  }

});