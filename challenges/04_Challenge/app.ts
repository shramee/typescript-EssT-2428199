function query<T>(
    items: T[],
	query?: {
		[Prop in keyof T]: ( Prop: T[Prop] ) => boolean
	},
    queryHalfSolved?: Partial< Record<keyof T, ( x: T[keyof T] ) => boolean >>, // <--- replace this!
) {
    return items.filter(item => {
        // iterate through each of the item's properties
        for (const property of Object.keys(item)) {

            // get the query for this property name
            const propertyQuery = query[property]

            // see if this property value matches the query
            if (propertyQuery && propertyQuery(item[property])) {
                return true
            }
        }

        // nothing matched so return false
        return false
    })
}

const matches = query(
    [
        { name: "Ted", age: 12 },
        { name: "Angie", age: 31 }
    ],
    {
        name: name => name === "Angie",
        age: age => age > 30,
    })
