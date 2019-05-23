let url = process.env.URL || "http://chore-monkey.herokuapp.com"

this.setState({
    userID: 1,
    adminGroups: [],
    nonAdminGroups: []
});

getGroups = event => {
    axios
    .get(`${url}/api/group/${this.state.userID}`)
      .then(response => {
      this.setState({ groups: response.data}))
      console.log(response);
      console.log(response.data);
    })
    .catch(err =>{
      console.log('error',err);
    })
  }
