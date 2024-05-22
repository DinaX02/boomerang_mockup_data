import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector from '@mui/material/StepConnector';
import Check from '@mui/icons-material/Check';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  '.MuiStepConnector-line': {
    borderColor: '#bdbdbd',
  },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  display: 'flex',
  height: 22,
  alignItems: 'center',
}));

const QontoStepIconCircle = styled('div')(({ theme, ownerState }) => ({
  width: 18,
  height: 18,
  borderRadius: '50%',
  backgroundColor: ownerState.completed ? '#00C17C' : '#bdbdbd',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
}));

const QontoStepIconCompleted = styled(Check)(({ theme, ownerState }) => ({
  color: '#fff',
  fontSize: "1em"
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      <QontoStepIconCircle ownerState={{ completed, active }}>
        {completed && <QontoStepIconCompleted ownerState={{ active }} />}
      </QontoStepIconCircle>
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
};

const CustomStepper = styled(Stepper)(({ theme }) => ({
  '.MuiStepLabel-label': {
    color: '#bdbdbd',
  },
}));

export default function CustomizedSteppers({ activeStep, onStepChange }) {
  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];
  return (
    <Stack sx={{ width: '100%',display: 'flex', justifyContent: 'center' }} spacing={4}>
      <CustomStepper activeStep={activeStep} connector={<QontoConnector />} style={{ width: '90%', marginTop: '1.5em', alignSelf: 'center'}}>
        {steps.map((label, index) => (
          <Step key={label} completed={index < activeStep}>
            <StepLabel StepIconComponent={QontoStepIcon}></StepLabel>
          </Step>
        ))}
      </CustomStepper>
    </Stack>
  );
}

CustomizedSteppers.propTypes = {
  activeStep: PropTypes.number.isRequired,
  onStepChange: PropTypes.func.isRequired,
};