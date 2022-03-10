import React, { FC } from 'react'
import FirstStepPage from './pages/firstStep/FirstStepPage'
import 'common/styles/global.scss'

const App: FC = () => {
  return (
    <div>
      <div className="container">
        <div className="form-container">
          <FirstStepPage />
        </div>
      </div>
    </div>
  )
}

export default App

/**
 *  configure tsconfig.json \\ complete
 *  ====1 step настройка стилей====
 *  - paths with lowercase \\ complete
 *  - styled-component https://styled-components.com/
 *  - sass - install \\ complete
 *  - global.scss import in the App.tsx и чтобы стили начали работать \\complete
 *  - styling by the style component
 *
 *   ====2 step настройка кода====
 *  - noImplementic any - то есть когда я делаю any type ts должен не давать мне это делать
 *  - eslint|tslint|prettier - любой стандарт ссылки найдешь сам
 *  - precommit-hooks - https://www.npmjs.com/package/husky - через него должен работать pre-commit
 *  - prepush-hook - тоже через husky
 */
