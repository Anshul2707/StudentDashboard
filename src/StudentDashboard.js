import React from 'react';
import CafeOverview from './App';
import ClassOverview from './classmate';
import Card from './EnrolledCourses';
import DiscoverCard from './DiscoverCourses';
import { HorizontalFlexBox , VerticleFlexBox, CafeDetail, CafeDetail1, CafeDetail2,VerticleFlexBox2} from './student.styles';
import { Scrollbars } from 'react-custom-scrollbars';



class StudentDashboard extends React.Component {
  constructor() {
    super();

    this.state = {
      cafe_details: {
        cafe_name: 'XYZ School of Engineering',
        cafe_address:' Bhavana Road, Samaypur Badli, New Delhi - 110001',
        faculty_incharge: 'Dr. Seema Singh',
        student_number: '24',
        course_percentage: '70',
        course_name: 'MICROSOFT EXCEL ', 
      },
    };
  }

  render() {
    const {
      cafe_name,
      cafe_address,
      faculty_incharge,
      student_number,
      course_percentage,
      course_name,
    } = this.state.cafe_details;
    return (
        <><HorizontalFlexBox>
        <VerticleFlexBox>
            <CafeDetail>Cafe Details</CafeDetail>
        <CafeOverview cafe_name={cafe_name} cafe_address={cafe_address} faculty_incharge={faculty_incharge }/></VerticleFlexBox>
    <VerticleFlexBox>
    <CafeDetail1>You Have</CafeDetail1>
    <ClassOverview student_number= {student_number}/>
    </VerticleFlexBox>
    </HorizontalFlexBox>
    <VerticleFlexBox2>
    <CafeDetail2>Enrolled Course</CafeDetail2>
    <Card course_percentage={course_percentage} course_name={course_name}/>

    </VerticleFlexBox2>
    <VerticleFlexBox2>
        <CafeDetail2>Discover More Courses</CafeDetail2>

        <DiscoverCard   course_name={course_name} />
    
    </VerticleFlexBox2>
    </>
        
        
    );
  }
}

export default StudentDashboard;