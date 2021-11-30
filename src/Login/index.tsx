import React, { FunctionComponent } from "react";
import {
  FormGroup,
  Card,
  CardBody,
  CardGroup,
  Container,
  Input,
  Col,
  Row,
  Form,
  InputGroup,
} from "reactstrap";

 const Login: FunctionComponent = () => {
  
  return (
    <div className="app flex-row align-items-center auth-page">
    <div className="auth-bg"></div>
    {/* <PDFViewer>
      <ConfirmAppointmentPdf selectedCellsCareinstitution={{}} qualificationList={[]} />
  </PDFViewer> */}
    <Container>
      <Row className="justify-content-center">
        <Col md="12">
          <div className="logo">
          </div>
          <CardGroup>
            <Card className="login-card p-4">
              <CardBody className="px-0 px-sm-4  py-0">
                <Form className="form-section">
                  <h1 className="auth-title text-center">
                    SIGNIN
                  </h1>
                  <p className="sub-title text-center">
                    TOYOURACCOUNT
                  </p>

                  <FormGroup className="position-relative">
                    <InputGroup>
                     
                      <Input
                        type={"text"}
                        name={"userName"}
                        placeholder='USERNAME_PLACEHOLDER'                        
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        // value={userName}
                        className={
                        
                         "text-input"
                        }
                        autoComplete="username"
                      />
                    </InputGroup>
                 
                  </FormGroup>

                  
                </Form>
              </CardBody>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  </div>
  );
};

export default Login;
