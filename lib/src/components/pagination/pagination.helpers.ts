import { mockTestQuestions } from './types'

export const getPageDetails = (
  page: mockTestQuestions | number,
  isMockTestVariant: boolean
): [number, boolean, boolean] => {
  let pageNumber
  let completed = false
  let disabled = false
  if (isMockTestVariant) {
    const { questionNumber, isCompleted, isDisabled } =
      page as mockTestQuestions
    pageNumber = questionNumber
    completed = isCompleted
    disabled = isDisabled
    return [pageNumber, completed, disabled]
  }

  return [page as number, completed, disabled]
}
