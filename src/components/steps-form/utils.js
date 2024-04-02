import isEmail from "validator/lib/isEmail"
import isMobilePhone from "validator/lib/isMobilePhone"

// validate
export const validate = (fields) => {
  const results = []
  fields.forEach((current, index) => {
    const field = { ...current }
    field.value = field.value.replace(field.expression, '').trim().toLowerCase()
    switch(current.name) {
      case "name":
        if (field.value === "") {
          field.invalid = true
          field.hint = "required"
        }
        if (field.value !== "" && field.value.length < 3) {
          field.invalid = true
          field.hint = "3 characters minimun"
        }
        if (field.value.lenght >= 3 && field.value.length > 30) {
          field.invalid = true
          field.hint = "30 characters maximun"
        }
        break
      case "email":
        if (!isEmail(field.value)) {
          field.invalid = true
          field.hint = "invalid email"
        }
        break
      case "phone-number":
        if (!isMobilePhone(field.value, ["en-US"], { strictMode: true })) {
          field.invalid = true
          field.hint = "invalid number"
        }
        break
    } // switch end
    results.push(field)
  }) // fields.forEach end
  return results
}
