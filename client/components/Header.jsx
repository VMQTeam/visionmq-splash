import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  

  return (
    <div> 
    <div id='header'>
    <div id='header1'>
      <a href='/'><img src='https://elasticbeanstalk-us-east-2-248243773254.s3.us-east-2.amazonaws.com/VISIONMQ.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLWVhc3QtMSJGMEQCIDjnqRXB3cjSIJiCSj9xZZIZ0A1WjBQC3VAC%2F18SyrmNAiBD4HDLDtCrN8ViOYLG6MkN9%2FMcI%2F6WIgmwbsA%2Btig2JSrtAgiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDI0ODI0Mzc3MzI1NCIMSR7LSntMUdx0i8WCKsECJFxCeWhXplC7pNJaIdS%2F9tDbLEpC3c6ZmG2ZCvXEApcBJyw0RpYrjRe9UKVp2S6Hupq85MncLK%2FgrtxlCETDYv966ux%2B9%2FFm3S1aJ05lajX9lJpX7gXubN4yuFb5ETriiiml2gATTu5DooLG%2Bsrm80JDLKPlfSrpxtsfk2cwwi2wTdM%2Bw9HHQWMp9%2B6mznJfpJE0ndj3HSRSXhwKuyNe4nAy4QmGhpDVYf%2FoVWam1AKlFGSsoba8N52MLp2UX%2F8C1imSRxLMxnf5ZRnJVLYrfJtZ8%2BZc43BVa%2BsRPh8CrlRt62kUsW%2BV%2FykD4Vl1axCwlfl%2FU6CZ676%2Fx36LnlDkskpejeTwNQt8mDnAuT8tBHa8hpCJdBzmwDBng34MxUMtQcLXSdC%2FbypdEf%2BXsCoS%2BNLWu3QuAWm6R2krVfvhByYcMN725awGOrQCdOX9D2HkDaob266dA8T6DQZumP4%2BEoc4hYc6IDVPddLJ0yYyes255MqfTbdcF1IFrHMBh9BJ3gEr0cjCu09JXLNHJ0J9XOpJRfump2jetvIiv%2BYQ5A%2FpyWW3HjlyVJr4IvKQwNg0FbSYE%2F58JZmOXm9VkM9nGyA%2Fn2FiUZc9fEuzzUUeW0WII%2F2w7Bqc4hfF4FqhfZo2ibYuReokyRQXt5erU747TxyWFABcP%2Fa47AT3Xn6c0XJiBsbaUdwCTSOV%2Bz2FsLbJLv0Uh4Ckd%2BcFY1uhwnucCkwfL%2B1LBg%2FQXrx7b5TWnCkiLIHAtjWr6rP56aE2RQM0Ceg7nlmB4eeqx2at3RlYI9ZuVld6YwD%2BxdguYLMbCl5kTzGf4JWId%2F1nFgkz%2Fkp%2FHCsjI807rEpaitw8M5k%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240106T191845Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIATTTD3L5DIE7R5HFF%2F20240106%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=58fc22a676ed69cbc2c4c2dd5dab2b4a6f10ab5a286d01a8610ec90e4fd60f9c' alt="Vision MQ logo" id="logo" /></a>
    </div>
      <div id='header2'>
        <Link to='/team'><button id='team-button'>team</button></Link>
        <Link to='/demo'><button id='demo-button'>demo</button></Link>
      </div>
    </div>
    <hr></hr>
    <hr></hr>
    </div>
  )
}

export default Header;