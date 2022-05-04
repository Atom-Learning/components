import React from 'react';
// import { styled } from '~/stitches'
import MDEditor from '@uiw/react-md-editor';
import { test, testPreview } from './commands/test'


export const Editor = () => {
    const [value, setValue] = React.useState("**Hello world!!!**");
    return (
        <div className="container">
            <MDEditor
                // ref={(el) => { if (el) console.log({ MDE: el }) }}
                value={value}
                onChange={(value = '') => setValue(value)}
                extraCommands={[
                    test
                ]}
                previewOptions={{
                    id: "myrto",
                    components: {
                        test: testPreview,
                        code: ({ inline, children, className, ...props }) => {
                            const txt = children?.join('') || "";
                            console.log({ children, txt })
                            if (inline) {
                                if (typeof txt === "string" && /^\$\$(.*)\$\$/.test(txt)) {
                                    // const html = txt.replace(/^\$\$(.*)\$\$/, "$1")
                                    const html = window.MathJax.tex2svg(
                                        txt.replace(/^\$\$(.*)\$\$/, "$1")
                                    ).innerHTML;
                                    return <code style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: html }} />;
                                }
                                return <code>{children}</code>;
                            }
                            if (
                                typeof txt === "string" &&
                                typeof className === "string"
                                // /^language-katex/.test(className.toLocaleLowerCase())
                            ) {
                                const html = window.MathJax.tex2svg(txt.replace(/^\$\$(.*)\$\$/, "$1")).innerHTML;
                                console.log("props", txt, className, props);
                                return <code style={{ background: 'red' }} dangerouslySetInnerHTML={{ __html: html }} />;
                            }
                            return <code>{children}</code>;
                        }
                    }
                }}
            />
            <MDEditor.Markdown source={value} />
        </div>
    );
}

Editor.displayName = 'Editor'
