import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import start from '../images/explain_img/main-menu.png';
import zero from '../images/explain_img/main-start.png';
import one from '../images/explain_img/question-heart-score.png';
import two from '../images/explain_img//question-choice.png';
import three from '../images/explain_img/question-right-box.png';
import four from '../images/explain_img/question-wrong-box.png';
import five from '../images/explain_img/question-timer.png';
import six from '../images/explain_img/result-1.png';
import seven from '../images/explain_img/rank-box.png';

const tutorialSteps = [
  {
    label: '메뉴',
    imgPath:
    start,
    explain: "세 버튼을 통해 게임, 랭킹, 게임 설명 메뉴에 진입할 수 있습니다."
  },
  {
    label: '메뉴',
    imgPath:
    zero,
    explain: "게임 시작을 눌러 당신의 맞춤법 실력을 뽐내보세요!"
  },
  {
    label: '게임',
    imgPath:
    one,
    explain: "하트는 라이프를 나타냅니다. 라이프가 0이 되면 해당 게임이 끝나고, 지금까지 획득한 점수가 산정됩니다."
  },
  {
    label: '게임',
    imgPath:
    two,
    explain: "주어진 선지 중 정답을 골라주세요."
  },
  {
    label: '게임',
    imgPath:
    three,
    explain: "맞는 답을 고른 경우 점수가 올라갑니다."
  },{
    label: '게임',
    imgPath:
    four,
    explain: "틀린 답을 고른 경우, 맞는 답이 표시되며 라이프가 하나 줄어듭니다."
  },{
    label: '게임-4',
    imgPath:
    five,
    explain: "타이머가 0이 되면 라이프를 하나 잃습니다. 시간 내에 풀어주세요!"
  },{
    label: '게임-5',
    imgPath:
    six,
    explain: "모든 라이프를 잃으면 닉네임과 이메일을 이용해 랭킹에 등록할 수 있습니다."
  },
  {
    label: '랭킹',
    imgPath:
    seven,
    explain: "랭킹 페이지는 랭크 모드에서 좋은 점수를 거둔 참가자들의 순위가 표시됩니다."
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: '60vh',
    alignItems: 'center',
    overflow: 'hidden',
    display: 'block',
    width: '80%',
    marginLeft: "10%"
  },
}));

export default function Sub() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container maxWidth="md">
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <img
        className="tutorialImage"
        src={tutorialSteps[activeStep].imgPath}
        alt={tutorialSteps[activeStep].label}
      />
        <Paper square elevation={0} className={classes.footer}>
        <Typography>{tutorialSteps[activeStep].explain}</Typography>
      </Paper>     
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </Container>
  );
}
