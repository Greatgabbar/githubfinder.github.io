class Ui{
  constructor(){
    this.profile=document.getElementById('profile');
  }
  
  showProfile(user){
   this.profile.innerHTML=`
   <div class="card card-bod mb-3">
   <h3 class="m-3">${user.login}</h3>
     <div class="row">
     <div class="col-md-3">
       <img class="img-fluid mb-2" src="${user.avatar_url}">
       <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>

     </div>
     <div class="col-md-9 mt-2">
       <span class="badge badge-primary">Public Repos:${user.public_repos}</span>
       <span class="badge badge-secondary">Public Gists:${user.public_gists}</span>
       <span class="badge badge-success">Public Followers:${user.followers}</span>
       <span class="badge badge-info">Public Following:${user.following}</span>
      <br><br>
      <ul class="list-group">
        <li class="list-group-item">Company:${user.company}</li>
        <li class="list-group-item">Website/Blog:${user.blog}</li>
        <li class="list-group-item">Location:${user.location}</li>
        <li class="list-group-item">User Joined:${user.created_at}</li>
      <ul>
     </div>  
     </div>
   </div>
   <h3 class="page-heading mb-3">Latest Repos</h3>
   <div id="repos"></div>
   `;
  }

  showRepo(repodata){
   let output='';
   repodata.forEach((repo)=>{
     output+=`
       <div class="card card-body mb-2">
         <div class="row">
           <div class="col-md-6">
             <a href="${repo.html_url}" target="_blank">${repo.name}</a>
           </div>
           <div class="col-md-6">
           <span class="badge badge-primary">Stars : ${repo.stargazers_count}</span>
           <span class="badge badge-secondary">Watchers : ${repo.watchers_count}</span>
           <span class="badge badge-success">Forks : ${repo.forks_count}</span>
           </div>
         </div>
       </div>
     `;
   });
   document.getElementById('repos').innerHTML=output;
  }

  showAlert(msg,lol){
    this.clearAlert();
    const div=document.createElement('div');
    div.className=lol;
    div.appendChild(document.createTextNode(msg));
    const container=document.querySelector('.searchContainer');
    const search=document.querySelector('.search');
    container.insertBefore(div,search);
    setTimeout(()=>this.clearAlert(),3000);
  }

  clearAlert(){
    const alert=document.querySelector('.alert');
    if(alert){
      alert.remove();
    }
  }

  clearProfile(){
    this.profile.innerHTML='';
  }
}