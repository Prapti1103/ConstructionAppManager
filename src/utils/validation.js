export const validateDPR = (data) => {
  let errors = {};

  if (!data.date) errors.date = "Date is required";

  if (!data.weather) errors.weather = "Weather is required";

  if (!data.description) errors.description = "Work description required";

  if (!data.workers || data.workers <= 0)
    errors.workers = "Worker count must be greater than 0";

  if (data.images.length > 3)
    errors.images = "You can upload maximum 3 images";

  return errors;
};