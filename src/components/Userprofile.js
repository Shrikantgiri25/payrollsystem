import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn

} from 'mdb-react-ui-kit';

export default function ProfilePage() {
  return (
    <section >
      <MDBContainer className="py-5">
       <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">Software Developer,Amazon</p>
                <p className="text-muted mb-4">lane no 3,old sangvi ,pune</p>
                <hr/>
                <p>PLEASE FILL ATTENDENCE </p>
                <div className="d-flex">

                 <MDBRow>
                 <MDBCol sm="12">
                  
                     <input type="text" id="formControlLg" className="form-control form-control-lg" placeholder='DEPARTMENT'/>
                    
                    </MDBCol>
                 <MDBCol sm="12">
                
                     <input type="date" id="formControlLg" className="form-control form-control-lg" />
                    
                    </MDBCol>
                    <MDBCol sm="12">
                    <lable>Time-In</lable>
                    <input type="time" id="formControlLg" className="form-control form-control-lg"/>
                    </MDBCol>
                    
                    <MDBCol sm="12">
                    <lable>Time-Out</lable>
                    <input type="time" id="formControlLg" className="form-control form-control-lg"/>
                    </MDBCol>
                  
                  <div>
                  <MDBBtn outline className="ms-1">Submit</MDBBtn>
                  </div>
                  </MDBRow>
                  
                </div>

              </MDBCardBody>
            </MDBCard>

          
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4" style={{ color: 'black'}}>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Shrikant Girisaheb</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Shrikantgiri@gmail.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Aadhar</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">lane no 3 madhuban society ,old sangvi ,pune</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}