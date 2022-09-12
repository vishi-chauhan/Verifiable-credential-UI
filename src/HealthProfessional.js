import { useState } from "react";
import axios from "axios";
import qs from 'qs';

const HealthProfessional = () => {
  const [name, setName] = useState('');
  const [DOB, setDOB] = useState('');
  const [rcouncil, setRcouncil] = useState('');
  const [lqualif, setLqualif] = useState('');
  const [university, setUniversity] = useState('');
  const [dyear, setDyear] = useState('');

  const [certid, setCertID] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    const token = getToken();
    certify(e, token)
    // const blog = { title, body, au;thor };

    // fetch('http://localhost:8000/blogs/', {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(blog)
    // }).then(() => {
    //   // history.go(-1);
    //   history.push('/');
    // })
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

  const certify = (token) => {
    var data = JSON.stringify({
      "name": name,
      "dob": "1991-01-21",
      "registrationId": "123454",
      "gender": "male",
      "registrationCouncil": rcouncil,
      "latestQualification": lqualif,
      "university": university,
      "degreeYear": dyear,
      "systemOfMedicine": "BDS",
      "registrationDate": "2021-09-09",
      "registrationExpiry": "2060-09-09",
      "issuer": "http://www.india.gov.in",
      "issuedOn": "2022-08-08T12:00:00Z",
      "validFrom": "2022-08-08T12:00:00Z",
      "validTill": "2022-08-08T12:00:00Z",
      "Issuer": "did:web:sunbirdrc.dev/vc/skill",
      "issuanceDate": "2022-08-08T12:00:00Z"
    });

    var config = {
      method: 'post',
      url: 'http://52.172.132.121/vc-certification/v1/certify/HPCertificate',

      data: data,
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJQWmFYVUNkZUhKZTJ4c3plMTdHRFl6cXo0UDFjS1dmaWZLb1g0QUtwOGVnIn0.eyJleHAiOjE2NjMwNjgyNzAsImlhdCI6MTY2Mjk4MTg3MCwianRpIjoiOWM5MGExZTMtNjA1Mi00OTBkLWIyZDUtMmEyZTRmYTI5Y2ExIiwiaXNzIjoiaHR0cDovLzUyLjE3Mi4xMzIuMTIxL2F1dGgvcmVhbG1zL3N1bmJpcmQtcmMiLCJhdWQiOlsiYWNjb3VudCIsImNlcnRpZmljYXRpb24iXSwic3ViIjoiYmY0Y2QxMGMtODc2Yy00MGVmLThjMzUtMmMyMjUyYjc3ZDM5IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoicmVnaXN0cnktZnJvbnRlbmQiLCJzZXNzaW9uX3N0YXRlIjoiNzY5MjdiOGQtNzEwNi00NWVlLWExYTgtZTBlMDk0NTQyNDJhIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL2xvY2FsaG9zdDo0MjAyIiwiaHR0cDovL2xvY2FsaG9zdDo0MjAyIiwiaHR0cHM6Ly9sb2NhbGhvc3Q6NDIwMCIsImh0dHBzOi8vbmRlYXIueGl2LmluIiwiaHR0cDovL2xvY2FsaG9zdDo0MjAwIiwiaHR0cDovL25kZWFyLnhpdi5pbiIsImh0dHBzOi8vc3VuYmlyZC1jZXJ0aWZpY2F0ZS1kZW1vLnhpdi5pbiIsImh0dHA6Ly8yMC4xOTguNjQuMTI4Il0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImFkbWluIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLW5kZWFyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19LCJjZXJ0aWZpY2F0aW9uIjp7InJvbGVzIjpbInZjLWNlcnRpZmljYXRpb24iXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiI3NjkyN2I4ZC03MTA2LTQ1ZWUtYTFhOC1lMGUwOTQ1NDI0MmEiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6InZpc2h3YTEiLCJlbnRpdHkiOlsiVGVuYW50Il0sImVtYWlsIjoidmlzaHdhMSJ9.gdiPFYOWKLvOy583XIBAhX5JdMpbH9LjV5XWdolFOCG-kvN5cEmb1NyevafHn-KiyuDZDz2TZeJ4BXdToRlhyDsiLYTAVUKotkj2jvj0vE6JWJF6igmkRBCn7zdRhYNBrUyRa6rtAbsTUzItSMA8X5gvQKq7xP3gz5G8P0DplFGhuR4EehWbG0za-Dxm1v-2DfwXdAoOmHrKFGRbp9C3JcYIoqg777AxdDLHZNOlVs9ZGk8rks14-azvk-bPVuLr4MH7UwHU_o2gtapUS-6aCgibGVGXPw1rYjgYkBNB6ocHrO5L1SVjB1FmgdheHjySVef54KbbFzxT-6JKfX7GsA',
        'Content-Type': 'application/json'
      },
    };

    axios(config)
      .then(function (response) {

        let parsedResponse = JSON.parse(JSON.stringify(response.data));
        const certID = parsedResponse.certificateAddResponse.result.HPCertificate.osid.substring(2);
        console.log(certID);
        setCertID("Certificate ID - " + certID);
      })
      .catch(function (error) {
        console.log(error);
      });
  }



  return (
    <div className="create">
      <h2>Health Professional Registry</h2>
      <div class="alert">
           {certid}
      </div>


      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>DOB:</label>
        <input
          type="text"
          required
          value={DOB}
          onChange={(e) => setDOB(e.target.value)}
        />
        <label>Registration Council:</label>
        <input
          type="text"
          required
          value={rcouncil}
          onChange={(e) => setRcouncil(e.target.value)}
        />
        <label>Latest Qualification:</label>
        <input
          type="text"
          required
          value={lqualif}
          onChange={(e) => setLqualif(e.target.value)}
        />
        <label>Universirty:</label>
        <input
          type="text"
          required
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
        />
        <label>Degree Year:</label>
        <input
          type="text"
          required
          value={dyear}
          onChange={(e) => setDyear(e.target.value)}
        />
        <button>Add Health Professional record</button>
      </form>
    </div>
  );
}


export default HealthProfessional;