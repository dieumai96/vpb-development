import React from 'react'

const QuestionItem = ({ item, index }) => {
  return (
    <div className="support-suggest-question-content__detail__items">
      <div className="suggest-question collapsed" data-toggle="collapse" data-target={"#question-" + index}>
        <p>
          {item.title_text_t}
        </p>
      </div>
      <div className="suggest-answer collapse" id={"question-" + index}>
        <div className="suggest-answer__form">
          <div dangerouslySetInnerHTML={{ __html: item.body_text_t }} />
          <div className="suggest-answer__form__socials" style={{ marginTop: '20px' }}>
            <label htmlFor={'suggest-like-' + index}>
              <input className="button-like" id={'suggest-like-' + index} type="radio" name={'question-' + index} />
              <span className="icon-thumbs-up"></span>
            </label>
            <label htmlFor={'suggest-dislike-' + index}>
              <input className="button-dislike" id={'suggest-dislike-' + index} type="radio" name={'question-' + index} />
              <span className="icon-thumbs-down"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionItem