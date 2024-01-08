import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { questionnaire } from "../../assets/constansts";
import { useLocation, useNavigate } from "react-router-dom";

import { ColorRing } from "react-loader-spinner";
import { NextArrowIcon, PreviousArrowIcon } from "../../assets/svg";
import Rating from "./Rating";

interface QStepperProps {
  // Add your component's props here
}

interface Question {
  step: string;
  question: string;
  options: string[];
  answerType?: string;
}

interface RadioFormData {
  [key: string]: { question: string | undefined; options: string | undefined };
}
interface CheckboxFormData {
  [key: string]: {
    question: string | undefined;
    options: string[] | undefined;
  };
}

const QStepper: React.FC<QStepperProps> = (props) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentQna, setCurrentQna] = useState<Question>();
  const [maxStep, setMaxStep] = useState<number>(6);
  const [containerHeight, setcontainerHeight] = useState<number>();
  const [formData, setFormData] = useState<
    RadioFormData | CheckboxFormData | undefined
  >({});
  const [loaderVisible, setLoaderVisible] = useState(false);

  const [rating, setRating] = useState<any>(0);
  const [isOtherChecked, setIsOtherChecked] = useState<boolean>(false);
  const [userOtherInput, setUserOtherInput] = useState<string>("");

  const location = useLocation();
  const navigate = useNavigate();

  const handleRadioOptionSelect = (selectedOption: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [currentQna?.step || ""]: {
        question: currentQna?.question,
        options: selectedOption,
      },
    }));
    // console.log(formData);
  };
  // const handleCheckboxOptionSelect = (selectedOption: string) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [currentQna?.step || ""]: {
  //       question: currentQna?.question,
  //       options: [
  //         ...(prevData && prevData[currentQna?.step || ""]
  //           ? prevData[currentQna!.step].options || []
  //           : []),
  //         selectedOption, // Add the newly selected option
  //       ],
  //     },
  //   }));
  //   console.log(formData);
  // };

  const CHECKBOX_INPUT_TOGGLE = "Other";
  const handleCheckboxOptionSelect = (selectedOption: string) => {
    if (selectedOption === CHECKBOX_INPUT_TOGGLE) {
      setIsOtherChecked(true);
    }
    setFormData((prevData: any) => {
      const currentStepData = prevData![currentQna?.step || ""];

      // Check if the selected option is already in the array
      const optionIndex = currentStepData?.options?.indexOf(selectedOption);

      if (currentStepData?.options && optionIndex !== -1) {
        // If the option is already present, remove it
        const updatedOptions = (currentStepData?.options as string[]).filter(
          (option: any, index: any) => index !== optionIndex
        );

        return {
          ...prevData,
          [currentQna?.step || ""]: {
            question: currentQna?.question,
            options: updatedOptions,
          },
        };
      } else {
        // If the option is not present, add it
        return {
          ...prevData,
          [currentQna?.step || ""]: {
            question: currentQna?.question,
            options: [
              ...(currentStepData?.options || []),
              selectedOption, // Add the newly selected option
            ],
          },
        };
      }
    });
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (
      formData &&
      userOtherInput &&
      formData[2].options?.includes(CHECKBOX_INPUT_TOGGLE)
    ) {
      // If other is also selected, then let's add the userInput to the formData
      // (formData[2].options as string[]).push(userOtherInput);

      // Specify the index of 'Other' in the array --> handling step-2
      const indexOfOther = (formData[2].options as string[]).indexOf(
        CHECKBOX_INPUT_TOGGLE
      );

      // Check if 'Other' is found in the array
      if (indexOfOther !== -1) {
        // Replace 'Other' with the specified value
        (formData[2].options as string[]).splice(
          indexOfOther,
          1,
          userOtherInput
        );
      }
    }
    const data = { ...formData, 4: rating[4] };

    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get("type");

    // Show loader for 5 seconds
    setLoaderVisible(true);
    setTimeout(() => {
      setLoaderVisible(false);

      // Route to the home page
      navigate(`/recommendation?type=${type}`);
    }, 5000);

    // TODO: Add your form submission logic here
    console.log("Form submitted:", data);

    localStorage.setItem(`{user-${Date.now()}}`, JSON.stringify(data));
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const step = queryParams.get("step");

    if (step) {
      setCurrentStep(+step);
    }
    const newSearch = location.search.replace(/&step=2/g, "");
    navigate({
      pathname: location.pathname,
      search: newSearch,
    });
  }, [location.search, navigate]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get("type");

    if (type !== "buy" && type !== "rent") {
      navigate("/");
    }

    const data = questionnaire.find((ele) => ele.type === type);
    if (data) {
      setMaxStep(data?.qna?.length);
    }

    const qnaData = data?.qna?.find((ele) => Number(ele.step) === currentStep);
    if (qnaData) {
      setCurrentQna(qnaData);
    }

    setcontainerHeight(currentQna?.answerType === "rating" ? 80 : 71);
  }, [currentStep, location.search, navigate, currentQna]);

  const renderPrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };
  const renderNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <section className="qna-stepper">
      <div className="box-container" style={{ height: `${containerHeight}vh` }}>
        <div className="heading">
          <h2>Find Your Ideal Florida Home</h2>
          <p>Tell me about what you’re looking for in the perfect home.</p>
        </div>
        <div className="steps-count">{currentStep}/6</div>
        <ProgressBar
          completed={(100 / maxStep) * currentStep}
          customLabel=""
          maxCompleted={100}
          isLabelVisible={false}
          bgColor="#6A704C"
        />
        <form
          className="qna-box"
          onSubmit={handleSubmit}
          key={`form-${currentQna?.step}`}
        >
          <div className="question" key={`question-${currentQna?.step}`}>
            {currentQna?.question}
          </div>
          <div className="options">
            {currentQna?.options.map((ele, index) => (
              <>
                {currentQna.answerType === "rating" ? (
                  <div className="option-rating-item" key={index}>
                    <span>{ele}</span>
                    <Rating
                      uniqueKey={index}
                      maxRating={5}
                      onRatingChange={setRating}
                      qna={currentQna}
                    />
                  </div>
                ) : (
                  <div className="option-item" key={index}>
                    {currentQna?.answerType === "checkbox" ? (
                      <>
                        {currentQna?.answerType === "checkbox" &&
                        ele === CHECKBOX_INPUT_TOGGLE ? (
                          <>
                            {isOtherChecked ? (
                              <input
                                type="text"
                                value={userOtherInput}
                                onChange={(e) =>
                                  setUserOtherInput(e.target.value)
                                }
                                className="other-user-input"
                                placeholder="(Please Specify)"
                              />
                            ) : (
                              <>
                                <input
                                  type={currentQna?.answerType}
                                  onChange={() =>
                                    handleCheckboxOptionSelect(ele)
                                  }
                                  // checked={(
                                  //   formData![currentQna?.step]?.options || []
                                  // ).includes(ele)}
                                />
                                <span>{ele}</span>
                              </>
                            )}
                          </>
                        ) : (
                          <input
                            type={currentQna?.answerType}
                            onChange={() => handleCheckboxOptionSelect(ele)}
                            // checked={(
                            //   formData![currentQna?.step]?.options || []
                            // ).includes(ele)}
                          />
                        )}
                      </>
                    ) : (
                      <input
                        type={currentQna?.answerType}
                        onChange={() => handleRadioOptionSelect(ele)}
                        name={`radio-input-${currentQna?.step}`}
                        checked={formData![currentQna?.step]?.options === ele}
                      />
                    )}
                    {ele !== CHECKBOX_INPUT_TOGGLE && <span>{ele}</span>}
                  </div>
                )}
              </>
            ))}
          </div>
        </form>
        <div
          className="btns"
          style={{
            justifyContent: currentStep === 1 ? "flex-end" : "space-between",
          }}
        >
          {currentStep !== 1 && (
            <span onClick={renderPrevStep}>
              <PreviousArrowIcon />
            </span>
          )}

          {maxStep === currentStep ? (
            <>
              {loaderVisible ? (
                <button
                  className="btn-primary submit-loader"
                  onClick={handleSubmit}
                  type="submit"
                >
                  <ColorRing
                    visible={true}
                    height="80"
                    width="49"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
                  />
                  Searching for you
                </button>
              ) : (
                <button
                  className="btn-primary"
                  onClick={handleSubmit}
                  type="submit"
                >
                  Let's Start
                </button>
              )}
            </>
          ) : (
            <button onClick={renderNextStep} className="btn-next" type="button">
              <span>NEXT</span>
              <NextArrowIcon />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default QStepper;
