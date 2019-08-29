import PropTypes from 'prop-types';
import React from 'react';
import { 
    Card, 
    Label,
    Icon, 
    Image, 
    Button,
    Dropdown, 
    Popup, 
    Divider, 
    Pagination 
    } from 'semantic-ui-react';

export default class Lead extends React.Component {
    constructor(props) {
        super(props);
        const { purchasedService } = this.props;
        this.state = {
            serviceDescription: ` CPU: ${services[purchasedService]['cpu']} GHz,  RAM: ${services[purchasedService]['ram']} GB,  Fee: ${services[purchasedService]['fee']} AZN`,
            serviceFee: services[purchasedService]['fee'],
        }
        this.getServiceDetails = this.getServiceDetails.bind(this);
    }

    getServiceDetails(event) {
        const serviceName = event.target.innerText;
        const serviceIndex = parseInt(serviceName.replace( /^\D+/g, '')) - 1;
        const serviceProps = services[serviceIndex]

        this.setState({ 
            serviceDescription: ` CPU: ${serviceProps['cpu']} GHz,  RAM: ${serviceProps['ram']} GB,  Fee: ${serviceProps['fee']} AZN`,
            serviceFee: serviceProps['fee'],
        });
    }
    
    render() {
        const { companyName,
                startDate, 
                endDate,
                stage, 
                projectName, 
                isPrivate, 
                diskType,
                diskSpace,
                purchasedService,
                industry
            } = this.props;
        const { serviceDescription, serviceFee } = this.state;

        return (
            <Card>
                <Card.Content>
                <Popup 
                    content={isPrivate ? 'Private Business' : 'Public Business'} 
                    trigger={<Image floated='right' size='mini' src={ isPrivate ? privateSectorIcon : publicSectorIcon } />}
                />
                <Card.Header>{ companyName }</Card.Header>
                <Card.Meta>{ projectName }</Card.Meta>
                <Divider />
                <Card.Description>
                    <Icon name="industry"/>  <strong>Industry: </strong> { industry } <br /> <br />
                    <Icon name="clock outline"/>  <strong>Start Date: </strong> { startDate } <br />
                    <Icon name="clock"/> <strong>End Date: </strong> { endDate } <br /> <br />
                    <Icon name="options"/>
                        <span> 
                            <strong> 
                                Virtual Service: {'  '} 
                            </strong> 
                            <Popup disabled={!serviceDescription} content={ serviceDescription } trigger={<Dropdown inline defaultValue={options[purchasedService].value} options={options} onChange={this.getServiceDetails}/>} /> 
                        </span> <br />
                    <Icon name="add" /> <strong> Additional Storage Fee: </strong> {Math.round(diskFees[diskType] * diskSpace * 10)/10} <br />
                    <Icon name="money bill alternate outline" /> <strong>Monthly Fee: </strong> {serviceFee} <br /> 
                    <Icon name="money bill alternate" /> <strong>Fee with VAT: </strong> <Popup content={`VAT is ${VAT}%`} trigger={<text>{Math.round(serviceFee*(1 + VAT)*10)/10}</text>}/> <br /> 
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Label as='a' size="big" color={styleColors[stage]} ribbon>
                    { stage }
                  </Label>
                  <Button animated color="black" floated="right" size="medium" style={{width: '6em', backgroundColor: '#9d9c97'}}>
                    <Button.Content visible>
                      <Icon name='arrow alternate circle right outline' />
                    </Button.Content>
                    <Button.Content hidden>See More</Button.Content>
                  </Button>
                </Card.Content>
            </Card>
            
        );
    }
}

const privateSectorIcon = 'https://cdn2.iconfinder.com/data/icons/business-management-1-5/66/94-512.png';
const publicSectorIcon = 'https://www.palittoconsulting.com/wp-content/uploads/2016/05/government-capital-featured-image-icon.jpg';

const VAT = 0.18;
const styleColors = {
    'initiate': 'teal',
    'demo': 'olive',
    'qualify': 'green',
    'develop': 'blue',
    'propose': 'pink',
    'prove': 'grey',
    'close': 'facebook',
    'signup': 'violet',
    'rejection': 'red',
    'postpone': 'yellow',
}

const options = [
    { key: 'vs1', text: 'VS1', value: 0 },
    { key: 'vs2', text: 'VS2', value: 1 },
    { key: 'vs3', text: 'VS3', value: 2 },
    { key: 'vs4', text: 'VS4', value: 3 },
    { key: 'vs5', text: 'VS5', value: 4 },
    { key: 'vs6', text: 'VS6', value: 5 },
    { key: 'vs7', text: 'VS7', value: 6 },
    { key: 'vs8', text: 'VS8', value: 7 },
    { key: 'vs9', text: 'VS9', value: 8 },
    { key: 'vs10', text: 'VS10', value: 9 },
    { key: 'vs11', text: 'VS11', value: 10 },
    { key: 'vs12', text: 'VS12', value: 11 },
    { key: 'vs13', text: 'VS13', value: 12 },
    { key: 'vs14', text: 'VS14', value: 13 },
    { key: 'vs15', text: 'VS15', value: 14 },
]

const services = [
    {
        'cpu': 1,
        'ram': 2,
        'fee': 10
    },
    {
        'cpu': 2,
        'ram': 4,
        'fee': 20
    },
    {
        'cpu': 4,
        'ram': 8,
        'fee': 40
    },
    {
        'cpu': 4,
        'ram': 16,
        'fee': 50
    },
    {
        'cpu': 8,
        'ram': 16,
        'fee': 100
    },
    {
        'cpu': 8,
        'ram': 32,
        'fee': 110
    },
    {
        'cpu': 8,
        'ram': 64,
        'fee': 120
    },
    {
        'cpu': 12,
        'ram': 24,
        'fee': 240
    },
    {
        'cpu': 12,
        'ram': 36,
        'fee': 250
    },
    {
        'cpu': 24,
        'ram': 48,
        'fee': 300
    },
    {
        'cpu': 24,
        'ram': 96,
        'fee': 310
    },
    {
        'cpu': 32,
        'ram': 64,
        'fee': 620
    },
    {
        'cpu': 32,
        'ram': 128,
        'fee': 630
    },
    {
        'cpu': 32,
        'ram': 192,
        'fee': 640
    },
    {
        'cpu': 32,
        'ram': 256,
        'fee': 650
    }
]

const diskFees = {
    '7.2K': 0.05, 
    '10K': 0.07, 
    'SSD': 0.09,
}