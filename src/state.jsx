// components
import PersonalInformation from "./components/steps-form/components/PersonalInformation.jsx"
import PlanSelector from "./components/steps-form/components/PlanSelector.jsx"
import AddonsSelector from "./components/steps-form/components/AddonsSelector.jsx"
import Summary from "./components/steps-form/components/Summary.jsx"

export const state = {
  steps: [
    {
      id: 1,
      heading: "personal info",
      subHeading: "your info",
      description: "Please provide your name, email address and phone number.",
      fields: [
        {
          id: "name",
          type: "text",
          label: "name",
          name: "name",
          action: "set-name",
          value: "",
          expression: /[^a-z\s?]/gi
        },
        {
          id: "email",
          type: "text",
          label: "email",
          name: "email",
          value: "",
          expression: /\s/gi
        },
        {
          id: "phone-number",
          type: "text",
          label: "phone number",
          name: "phone-number",
          value: "",
          expression: /[^0-9+?]/gi
        }
      ],
      Component: PersonalInformation
    },
    {
      id: 2,
      heading: "select your plan",
      subHeading: "select a plan",
      description: "You have the option of monthly or yearly billing",
      modalities: [
        {
          id: 1,
          name: "arcade",
          price: 9,
          icon: "icon-arcade.svg",
          selected: true
        },
        {
          id: 2,
          name: "advanced",
          price: 12,
          icon: "icon-advanced.svg",
          selected: false
        },
        {
          id: 3,
          name: "pro",
          price: 13,
          icon: "icon-pro.svg",
          selected: false
        }
      ],
      monthly: true,
      Component: PlanSelector
    },
    {
      id: 3,
      heading: "pick add-ons",
      subHeading: "add-ons",
      description: "Add-ons help to enhance your gaming experience",
      addons: [
        {
          id: 1,
          name: "online services",
          description: "Access to multiplayer games",
          price: 1,
          selected: true
        },
        {
          id: 2,
          name: "larger storage",
          description: "Extra 1TB of cloud save",
          price: 2,
          selected: true
        },
        {
          id: 3,
          name: "costomizable profile",
          description: "Custom theme on your profile",
          price: 2,
          selected: false
        }
      ],
      Component: AddonsSelector
    },
    {
      id: 4,
      heading: "finishing up",
      subHeading: "summary",
      description: "Add-ons help to enhance your gaming experience",
      summary: {},
      Component: Summary
    }
  ],
  currentStep: 0
}

// export default state
