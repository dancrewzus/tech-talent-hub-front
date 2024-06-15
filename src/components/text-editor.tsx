import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import type React from "react";

/*interface MyEditorState {
	data: string; // The content of the editor
}*/

const MyRichTextEditor: React.FC = () => {
	/*const handleEditorChange = (event, editor) => {
        const data = editor.getData();
        setEditorData(data);
    };*/

	return (
		<CKEditor
			editor={ClassicEditor}
			//data={editorData}
			//onChange={handleEditorChange}
		/>
	);
};

export default MyRichTextEditor;
