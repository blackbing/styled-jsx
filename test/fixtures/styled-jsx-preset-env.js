import extStyle from './style2'

export default () => (
  <div className="hello">
    <p>Hello World</p>
    <style jsx global>
      {extStyle}
    </style>
  </div>
)
