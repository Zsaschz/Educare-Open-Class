import { CONFLICT, NOT_ACCEPTABLE, NOT_FOUND, UNAUTHORIZED } from "http-status";
import ApiError from "./apiError";

export const usernameAlreadyExistError = (): ApiError => {
  return new ApiError(
    CONFLICT,
    "Register Error",
    "There is already exist user with given username."
  );
};

export const noUsernameFoundError = (): ApiError => {
  return new ApiError(
    NOT_FOUND,
    "Login Error",
    "There is no user with given username."
  );
};

export const wrongPasswordError = (): ApiError => {
  return new ApiError(
    NOT_ACCEPTABLE,
    "Login Error",
    "The given password doesnt match."
  );
};

export const accountNotVerifiedError = (): ApiError => {
  return new ApiError(
    NOT_ACCEPTABLE,
    "Login Error",
    "Your account is not verified yet."
  );
};

export const unauthorizedAccesError = (): ApiError => {
  return new ApiError(
    UNAUTHORIZED,
    "Token Error",
    "Unauthorized in api access."
  );
};

export const unauthorizedRoleError = (): ApiError => {
  return new ApiError(
    UNAUTHORIZED,
    "Role Error",
    "The role access doesn't match with the api credential."
  );
};

export const noUserFoundError = (): ApiError => {
  return new ApiError(
    NOT_FOUND,
    "User Error",
    "There is no user with given id."
  );
};

export const insufficientBalanceError = (): ApiError => {
  return new ApiError(
    NOT_ACCEPTABLE,
    "Wallet Error",
    "Your wallet balance is insufficient."
  );
};

export const noDonationFoundError = (): ApiError => {
  return new ApiError(
    NOT_FOUND,
    "Donation Error",
    "There is no donation with given id."
  );
};

export const donationAlreadyClosedError = (): ApiError => {
  return new ApiError(
    NOT_ACCEPTABLE,
    "Donation Error",
    "This donation is already end."
  );
};

export const donationNotVerifiedError = (): ApiError => {
  return new ApiError(
    NOT_ACCEPTABLE,
    "Donation Error",
    "Can't donate, donation is not verified yet."
  );
};

export const donationNotOverError = (): ApiError => {
  return new ApiError(
    NOT_ACCEPTABLE,
    "Donation Error",
    "Can't withdraw, donation isn't over yet."
  );
};

export const notDonationOwnerError = (): ApiError => {
  return new ApiError(
    UNAUTHORIZED,
    "Donation Error",
    "You are only allowed to withdraw from your own donation."
  );
};

export const noWithdrawalFoundError = (): ApiError => {
  return new ApiError(
    NOT_FOUND,
    "Withdrawal Error",
    "There is no withdrawal with given id"
  );
};

export const insufficientDonationAmounError = (): ApiError => {
  return new ApiError(
    NOT_ACCEPTABLE,
    "Withdrawal Error",
    "Your donation balance is less than your withdrawal amount request"
  );
};

export const articleNotFoundError = (): ApiError => {
  return new ApiError(
    NOT_FOUND,
    "Article Error",
    "There is no article with given id."
  );
};

export const forumNotFoundEror = (): ApiError => {
  return new ApiError(
    NOT_FOUND,
    "Forum Error",
    "There is no forum with given id."
  );
};

export const notYourForumError = (): ApiError => {
  return new ApiError(
    UNAUTHORIZED,
    "Forum Error",
    "This is not the forum your create."
  );
};

export const noAnimalFoundError = (): ApiError => {
  return new ApiError(
    NOT_FOUND,
    "Adoption Error",
    "There is no animal with given id."
  );
};

export const noAdoptionFoundError = (): ApiError => {
  return new ApiError(
    NOT_FOUND,
    "Adoption Error",
    "There is no adoption with given id."
  );
};

export const animalAlreadyAdoptedError = (): ApiError => {
  return new ApiError(
    NOT_FOUND,
    "Adoption Error",
    "This animal is already adopted"
  );
};

export const consultationRoomNotFoundError = (): ApiError => {
  return new ApiError(
    NOT_FOUND,
    "Consultation Error",
    "There is no consultation room with given id."
  );
};

export const notYourConsultationRoomError = (): ApiError => {
  return new ApiError(
    UNAUTHORIZED,
    "Consultation Error",
    "This is not the consultaion room you are a part of."
  );
};
