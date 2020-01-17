import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';

interface IProps {
  activitie: IActivity;
  setEditMode: (editMode: boolean) => void;
  setSelectedActivitie: (activitie: IActivity | null) => void;
}

const ActivityDetails: React.FC<IProps> = ({
  activitie,
  setEditMode,
  setSelectedActivitie
}) => {
  return (
    <Card fluid>
      <Image
        src={`/assets/categoryImages/${activitie.category}.jpg`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{activitie.title}</Card.Header>
        <Card.Meta>
          <span>{activitie.date}</span>
        </Card.Meta>
        <Card.Description>{activitie.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button
            onClick={() => setEditMode(true)}
            basic
            color="blue"
            content="Edit"
          />
          <Button
            onClick={() => setSelectedActivitie(null)}
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default ActivityDetails;
