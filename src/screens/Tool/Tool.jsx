/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-17 15:05:00
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-17 14:16:34
 */

// Base Components
import React, { Component } from 'react';

// Router Community Components
import { withRouter } from 'react-router-dom';

// Ant Design CSS
import 'antd/dist/antd.css';

// Contants
import { TITLES, INPUT_TYPE, ERROR_MESSAGE } from '../../constants';

// API_UTILS
import API from '../../service/Service';

// ETT-COMPONENTS
import ETTCOMPONENTS from '../../components/ETT-Components/index';

// CUSTOM COMPONENTS
import CustomComponents from '../../components/CustomComponents/constants';

// Style palette
import { SIZE, STYLE, CLASSNAME } from '../../theme/ettStylePalette';

/**
 * @author Siddharth Sunchu (OICT)-ETT | siddharth.sunchu@un.org
 * @description Tool Component to display Tool page with all the functionality of all the
 * step selection and API calls
 * @description Global State for the Application
 */
class Tool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputType: '',
      labelType: '',
      results: false,
      showStep2: false,
      showStep3: false,
      steps: 0,
      output: [],
      labels: [],
      textData: '',
      title: '',
    };
    this.onLabelType = this.onLabelType.bind(this);
    this.onInputType = this.onInputType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.moveToStep1 = this.moveToStep1.bind(this);
    this.moveToStep2 = this.moveToStep2.bind(this);
    this.moveToStep3 = this.moveToStep3.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeTextData = this.onChangeTextData.bind(this);
  }

  /**
   * 
   * @param {eventhandler} e - Event handler to chnage the Text
   * @description Once you change the text on input box , it updates the state with the change
   * @returns None
   */

  onInputType(e) {
    this.setState({
      inputType: e.target.value,
      results: false,
      showStep3: true,
      steps: 2,
    });
  }

  onLabelType(e) {
    this.setState({
      labelType: e.target.value,
      showStep2: true,
      showStep3: false,
      results: false,
      inputType: null,
      steps: 1,
    });
  }

  onChangeTextData(e) {
    console.log(e.target.value);
    this.setState({
      textData: e.target.value,
    });
  }

  onChangeTitle(e) {
    console.log(e.target.value);
    this.setState({
      title: e.target.value,
    });
    console.log(this.state.title);
  }

  handleSubmit(event) {
    const {
      labelType, inputType, title, textData,
    } = this.state;
    event.preventDefault();
    this.setState({ steps: 3 });
    if (inputType === INPUT_TYPE.TYPE1) {
      const Output = API.RequestResponse(labelType, title, textData);
      Output.then((response) => {
        if (response.data === TITLES.TITLE_DATA) {
          ETTCOMPONENTS.ErrorNotification(ERROR_MESSAGE.TITLE_DATA);
          this.setState({
            steps: 2,
          });
        } else if (response.data === TITLES.TEXT_DATA) {
          ETTCOMPONENTS.ErrorNotification(ERROR_MESSAGE.TEXT_DATA);
          this.setState({
            steps: 2,
          });
        } else if (response.data === TITLES.TITLE_TEXTDATA) {
          ETTCOMPONENTS.ErrorNotification(ERROR_MESSAGE.TITLE_TEXTDATA);
          this.setState({
            steps: 2,
          });
        } else {
          this.setState({
            output: Object.values(response.data),
            results: true,
            steps: 4,
          });
        }
      }).catch(() => {
        ETTCOMPONENTS.ErrorNotification(ERROR_MESSAGE.REFRESH_PAGE);
      });
    } else {
      const output = API.Batch(labelType);
      output.then((res) => {
        if (res.data === TITLES.FILE) {
          ETTCOMPONENTS.ErrorNotification(ERROR_MESSAGE.FILE);
          this.setState({ steps: 2 });
        } else {
          this.setState({
            output: Object.values(res.data),
            results: true,
            steps: 4,
          });
        }
      });
    }
  }

  moveToStep1() {
    const previousStep = 0;
    this.setState({
      inputType: null,
      steps: previousStep,
      textData: '',
      title: '',
      labelType: null,
    });
    const refreshAPI = API.Refresh();
    refreshAPI
      .then(() => {})
      .catch(() => {
        ETTCOMPONENTS.ErrorNotification(ERROR_MESSAGE.REFRESH_PAGE);
      });
  }

  moveToStep2() {
    const binding = this;
    const previousStep = 1;
    binding.setState({
      inputType: '',
      steps: previousStep,
      textData: '',
      title: '',
    });
    const refreshAPI = API.Refresh();
    refreshAPI
      .then(() => {})
      .catch(() => {
        ETTCOMPONENTS.ErrorNotification(ERROR_MESSAGE.REFRESH_PAGE);
      });
  }

  moveToStep3() {
    const binding = this;
    const previousStep = 2;
    binding.setState({
      inputType: '',
      steps: previousStep,
      textData: '',
      title: '',
    });
    const refreshAPI = API.Refresh();
    refreshAPI
      .then(() => {})
      .catch(() => {
        ETTCOMPONENTS.ErrorNotification(ERROR_MESSAGE.REFRESH_PAGE);
      });
  }

  render() {
    const {
      steps,
      labelType,
      inputType,
      showStep2,
      showStep3,
      title,
      textData,
      results,
      output,
      labels,
      downloadFile,
    } = this.state;
    return (
      <div
        className={CLASSNAME.TOOL_PAGE}
        style={{ height: window.innerHeight, width: window.innerWidth }}
      >
        <ETTCOMPONENTS.SpaceSector
          height={SIZE.SECTOR_HEIGHT_SECONDARY + SIZE.SECTOR_HEIGHT_SECONDARY_HALF}
        />
        <ETTCOMPONENTS.JustifyCenterWrapper>
          <ETTCOMPONENTS.MainHeaderText>
            {TITLES.DEPARTMENT_NAME}
            {TITLES.PROJECT_NAME}
            {TITLES.CLASSIFICATION_TOOL}
          </ETTCOMPONENTS.MainHeaderText>
        </ETTCOMPONENTS.JustifyCenterWrapper>
        <ETTCOMPONENTS.SpaceSector height={SIZE.SECTOR_HEIGHT_SECONDARY_HALF} />
        <ETTCOMPONENTS.JustifyCenterWrapper>
          <ETTCOMPONENTS.HeaderText margin={SIZE.SECTOR_HEIGHT_ZER0}>
            {TITLES.PROJECT}
          </ETTCOMPONENTS.HeaderText>
        </ETTCOMPONENTS.JustifyCenterWrapper>
        <ETTCOMPONENTS.JustifyCenterWrapper>
          <ETTCOMPONENTS.Paragraph
            style={{
              textAlign: STYLE.TEXT_ALIGN_CENTER,
              letterSpacing: STYLE.TEXT_SPACING,
              margin: STYLE.TEXT_MARGIN_CONTAINER,
            }}
          >
            {TITLES.PROJECT_DESCRIPTION}
          </ETTCOMPONENTS.Paragraph>
        </ETTCOMPONENTS.JustifyCenterWrapper>
        {/* <ETTCOMPONENTS.JustifyCenterWrapper>
          <ETTCOMPONENTS.Paragraph
            style={{
              textAlign: STYLE.TEXT_ALIGN_CENTER,
              letterSpacing: STYLE.TEXT_SPACING,
            }}
          >
            {TITLES.PROJECT_INFO}
          </ETTCOMPONENTS.Paragraph>
        </ETTCOMPONENTS.JustifyCenterWrapper> */}

        <section className={CLASSNAME.STEP_SELECTOR}>
          <br />
          <CustomComponents.IconsSelector
            currentStep={steps}
            onClick1={this.moveToStep1}
            onClick2={this.moveToStep2}
            onClick3={this.moveToStep3}
            onClick4={this.moveToStep4}
          />
        </section>
        <section className={CLASSNAME.SELECT_CONTAINER}>
          <CustomComponents.StepSelector
            currentStep={steps}
            onLableType={this.onLabelType}
            inputLabelType={labelType}
            onInputType={this.onInputType}
            inputType={inputType}
            showStep2={showStep2}
            handleSubmit={this.handleSubmit}
            showStep3={showStep3}
            titleData={title}
            textData={textData}
            result={results}
            output={output}
            labels={labels}
            downloadFile={downloadFile}
            onChangeTitle={this.onChangeTitle}
            onChangeTextData={this.onChangeTextData}
          />
        </section>
      </div>
    );
  }
}

export default withRouter(Tool);
