import React from 'react';
import { Team } from '../../../@types/team';
import {
  Title,
  LabelRadioButton,
  ButtonPrimaryCustom,
} from './FormTeam.styles';
import Row from '../../GridSystem/Row/Row';
import Col from '../../GridSystem/Col/Col';
import InputField from '../InputField/InputField';
import RadioButtonField from '../RadioButtonField/RadioButtonField';
import SelectField from '../SelectField/SelectField';

interface FormTeamProps {
  team: Team;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange?: (event: React.ChangeEvent<any>) => void;
}

const FormTeam: React.FC<FormTeamProps> = ({ team, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <Row>
        <Col width="100%">
          <Title>Team Information</Title>
        </Col>
      </Row>

      <Row>
        <Col width="50%">
          <InputField
            label="Team name"
            name="name"
            value={team.name}
            placeholder="Insert team name"
            required
            onChange={onChange}
          />
          <InputField
            label="Description"
            name="description"
            value={team.description}
            type="textarea"
            onChange={onChange}
          />
        </Col>
        <Col width="50%">
          <InputField
            label="Team website"
            name="url"
            value={team.url}
            placeholder="http://myteam.com"
            required
            onChange={onChange}
          />
          <LabelRadioButton>Team type</LabelRadioButton>
          <RadioButtonField
            value={team.type}
            name="type"
            labels={['Real', 'Fantasy']}
            onChange={onChange}
            required
          />
          <InputField
            label="Tags"
            name="tags"
            value="" // {team.tags}
            type="textarea"
            // onChange={onChange}
          />
        </Col>
      </Row>

      <Row>
        <Col width="100%">
          <Title>Configure Squad</Title>
        </Col>
      </Row>

      <Row>
        <Col width="50%">
          <SelectField
            label="Formation"
            name="formation"
            value={team.formation || ''}
            onChange={onChange}
            required
            options={[
              { value: '3 - 2 - 2 - 3', label: '3 - 2 - 2 - 3' },
              { value: '3 - 2 - 3 - 1', label: '3 - 2 - 3 - 1' },
              { value: '3 - 4 - 3', label: '3 - 4 - 3' },
              { value: '3 - 5 - 2', label: '3 - 5 - 2' },
              { value: '4 - 2 - 3 - 1', label: '4 - 2 - 3 - 1' },
              { value: '4 - 3 - 1 - 1', label: '4 - 3 - 1 - 1' },
              { value: '4 - 3 - 2', label: '4 - 3 - 2' },
              { value: '4 - 4 - 2', label: '4 - 4 - 2' },
              { value: '4 - 5 - 1', label: '4 - 5 - 1' },
              { value: '5 - 4 -1', label: '5 - 4 -1' },
            ]}
          />
        </Col>
        <Col width="50%">
          <InputField
            label="Search Players"
            name="search"
            value=""
            // onChange={onChange}
          />
        </Col>
      </Row>

      <Row>
        <Col width="50%">
          <ButtonPrimaryCustom type="submit">Save</ButtonPrimaryCustom>
        </Col>
      </Row>
    </form>
  );
};

export default FormTeam;
