import { Text, View, StyleSheet, Image } from "react-native"

type Props = {
    person: {
        id: number,
        name: string,
        age: number,
        image: string
    }
}

const Person = ({ person }: Props) => {
    return (
        <View style={styles.person}>
            <Image
                source={{ uri: person.image }}
                style={styles.personImage}
            />
            <View>
                <Text style={styles.personName}>{person.name}</Text>
                <Text>{person.age}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    person: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginBottom: 24
    },
    personImage: {
        width: 75,
        height: 75,
        objectFit: "cover",
        borderRadius: 37.5,
    },
    personName: {
        fontSize: 16
    }
})

export default Person