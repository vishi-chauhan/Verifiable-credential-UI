import { useState } from "react";
import axios from "axios";
import qs from 'qs';

const Home = () => {
  const [certID, setcertID] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    const token = getToken();
    download()
    
  }

  const getToken = () => {

    var data = qs.stringify({
      'client_id': 'registry-frontend',
      'username': 'vishwa1',
      'password': 'abcd@123',
      'grant_type': 'password'
    });
    var config = {
      method: 'post',
      url: 'http://52.172.132.121/auth/realms/sunbird-rc/protocol/openid-connect/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    const token = axios(config)
      .then(function (response) {
        //console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    return token;
  }

  const download = () => {
    var data = '';

    var config = {
      method: 'get',
      responseType: 'blob',
      url: `http://52.172.132.121/vc-certification/v1/certificate/HPCertificate/${certID}`,
      headers: { 
        'Accept': 'application/pdf', 
        'template-key': 'html', 
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJQWmFYVUNkZUhKZTJ4c3plMTdHRFl6cXo0UDFjS1dmaWZLb1g0QUtwOGVnIn0.eyJleHAiOjE2NjMwNjgyNzAsImlhdCI6MTY2Mjk4MTg3MCwianRpIjoiOWM5MGExZTMtNjA1Mi00OTBkLWIyZDUtMmEyZTRmYTI5Y2ExIiwiaXNzIjoiaHR0cDovLzUyLjE3Mi4xMzIuMTIxL2F1dGgvcmVhbG1zL3N1bmJpcmQtcmMiLCJhdWQiOlsiYWNjb3VudCIsImNlcnRpZmljYXRpb24iXSwic3ViIjoiYmY0Y2QxMGMtODc2Yy00MGVmLThjMzUtMmMyMjUyYjc3ZDM5IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoicmVnaXN0cnktZnJvbnRlbmQiLCJzZXNzaW9uX3N0YXRlIjoiNzY5MjdiOGQtNzEwNi00NWVlLWExYTgtZTBlMDk0NTQyNDJhIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL2xvY2FsaG9zdDo0MjAyIiwiaHR0cDovL2xvY2FsaG9zdDo0MjAyIiwiaHR0cHM6Ly9sb2NhbGhvc3Q6NDIwMCIsImh0dHBzOi8vbmRlYXIueGl2LmluIiwiaHR0cDovL2xvY2FsaG9zdDo0MjAwIiwiaHR0cDovL25kZWFyLnhpdi5pbiIsImh0dHBzOi8vc3VuYmlyZC1jZXJ0aWZpY2F0ZS1kZW1vLnhpdi5pbiIsImh0dHA6Ly8yMC4xOTguNjQuMTI4Il0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImFkbWluIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLW5kZWFyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19LCJjZXJ0aWZpY2F0aW9uIjp7InJvbGVzIjpbInZjLWNlcnRpZmljYXRpb24iXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiI3NjkyN2I4ZC03MTA2LTQ1ZWUtYTFhOC1lMGUwOTQ1NDI0MmEiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6InZpc2h3YTEiLCJlbnRpdHkiOlsiVGVuYW50Il0sImVtYWlsIjoidmlzaHdhMSJ9.gdiPFYOWKLvOy583XIBAhX5JdMpbH9LjV5XWdolFOCG-kvN5cEmb1NyevafHn-KiyuDZDz2TZeJ4BXdToRlhyDsiLYTAVUKotkj2jvj0vE6JWJF6igmkRBCn7zdRhYNBrUyRa6rtAbsTUzItSMA8X5gvQKq7xP3gz5G8P0DplFGhuR4EehWbG0za-Dxm1v-2DfwXdAoOmHrKFGRbp9C3JcYIoqg777AxdDLHZNOlVs9ZGk8rks14-azvk-bPVuLr4MH7UwHU_o2gtapUS-6aCgibGVGXPw1rYjgYkBNB6ocHrO5L1SVjB1FmgdheHjySVef54KbbFzxT-6JKfX7GsA'
      },
      data : data
    };
    
    axios(config)
    .then(response => {
      //Create a Blob from the PDF Stream
          let file = new Blob(
            [response.data], 
            {type: 'application/pdf'});
      //Build a URL from the file
          const fileURL = URL.createObjectURL(file);
      //Open the URL on new Window
          window.open(fileURL);
      })
      .catch(error => {
          console.log(error);
      });
    
  }



  return (
    <div className="create">
      <h2>Download Certificate</h2>
       <form onSubmit={handleSubmit}>
        <label>Enter Certificate ID:</label>
        <input
          type="text"
          required
          value={certID}
          onChange={(e) => setcertID(e.target.value)}
        />
        
        <button>Download Certificate</button>
      </form>
    </div>
  );
}

export default Home;
