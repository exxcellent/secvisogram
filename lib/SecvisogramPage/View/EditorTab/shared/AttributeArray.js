import React from 'react'

/**
 * @param {{
    array?: Array<any>
    onUpdate({}): void
    children(
      props: {
        value: any
        index: number
      }
    ): JSX.Element
  }} props
 */
export default function AttributeArray({ array, onUpdate, children }) {
  return (
    <>
      {array
        ? array.map((value, index) => (
            <div key={index} className="mt-2 first:mt-0">
              {children({ value, index })}
            </div>
          ))
        : null}
      <div className="mb-1">
        <button
          className="border py-2 px-3 hover:bg-gray-200"
          onClick={() => {
            onUpdate({
              $push: [''],
            })
          }}
        >
          +
        </button>
      </div>
    </>
  )
}