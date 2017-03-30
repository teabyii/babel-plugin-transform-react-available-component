export default function ({ types: t }) {
  const visitor = {}

  visitor.JSXElement = {
    enter (path, state) {
      const context = state.opts.context || false
      const id = state.opts.attribute || 'available'
      const { node } = path
      const openingElement = node.openingElement

      if (
        openingElement &&
        openingElement.attributes
      ) {
        const attr = openingElement.attributes.find(attribute => {
          return attribute.name && attribute.name.name === id
        })

        if (!attr) {
          return
        }

        const callParams = [
          attr.value.type === 'JSXExpressionContainer'
                ? attr.value.expression : attr.value
        ]

        const condition = t.callExpression(
            context ? t.memberExpression(
                context === true ? t.thisExpression() : t.identifier(context),
                t.identifier(id)
            ) : t.identifier(id),
            callParams
        )

        const attributes = openingElement.attributes.filter(attribute => {
          const { type, name } = attribute
          return type === 'JSXAttribute' && name.name !== id
        })

        const element = t.JSXElement(
          t.JSXOpeningElement(
            openingElement.name,
            attributes
          ),
          node.closingElement,
          node.children
        )

        path.replaceWith(t.conditionalExpression(condition, element, t.nullLiteral()))
      }
    }
  }

  return {
    visitor
  }
}
