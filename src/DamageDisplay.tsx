import React, { useState, useCallback } from 'react';
import { Divider, Grid, Segment } from 'semantic-ui-react';
import { Champion } from './champions/Champion';

interface Props {
  attack: Champion,
  defend: Champion,
};

const DamageDisplay = (props: Props) => {
  const [, updateState] = useState();
  const update = useCallback(() => updateState({}), []);

  return (
    <div>
      <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <h1>{props.attack.getName()}</h1>
            {props.attack.displayHp()}
            <img src={props.attack.getAvatar()} alt="avatar" />
            {props.attack.displaySpells(update)}
          </Grid.Column>
          <Grid.Column verticalAlign='middle'>
            <h1>{props.defend.getName()}</h1>
            {props.defend.displayHp()}
            <img src={props.defend.getAvatar()} alt="avatar" />
          </Grid.Column>
        </Grid>
        <Divider vertical>VS</Divider>
      </Segment>
      <Segment>
        {props.attack.getSkillDisplay().map((skill: any) => skill)}
      </Segment>
    </div>
  );
}

export default DamageDisplay;
