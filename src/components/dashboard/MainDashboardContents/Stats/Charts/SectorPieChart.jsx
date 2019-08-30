import PropTypes from 'prop-types';
import React from 'react';
import { VictoryPie, VictoryContainer } from 'victory';
import { Segment } from 'semantic-ui-react';

export default class SectorPieChart extends React.Component {
    render() {
        return (
            // <VictoryContainer >
                // <svg>
            <VictoryPie
              data={[
                { x: "Public", y: 35 },
                { x: "Private", y: 15 },
              ]}
              colorScale="qualitative"
              width={300} height={300}
            />
            // </svg>
            // </VictoryContainer>
        );
    }
}