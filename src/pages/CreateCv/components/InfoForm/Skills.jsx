import TextInput from '../common/components/TextInput'

const Skills = ({ skills, onChangeSkills }) => {
    return (
        <TextInput id="skills" name="skills" value={skills} onTextChange={onChangeSkills} />
    )
}

export default Skills
