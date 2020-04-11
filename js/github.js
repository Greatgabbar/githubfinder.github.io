class GitHub{
  constructor(){
    this.client_id='ee225bbae39d89415148';
    this.client_secret='a7e90d9952fe855ceeb3246307a307a9065f82b8';
    this.repos_count=5;
    this.repos_sort='created:asc';
  }

  async getUser(user){
    const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const repos=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData=await profileResponse.json();
    const repodata=await repos.json();
    return {
      profileData,
      repodata
    }
  }
}