import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import logo from "../../assest/image/job.jpg";
import './layout.css';

 function Header() {
    return (
        <div className="header">
            <Container fixed className="header-content">
              <img src={logo} className="job-logo" alt="logo" />
              <Typography variant="h4" component="h2" gutterBottom>
                    Jobs
                </Typography>
            </Container>
            
        </div>
    )
}

export default Header;