var e = [
  Object.freeze({
    displayName: "TypeScript",
    name: "typescript",
    patterns: [
      { include: "#directives" },
      { include: "#statements" },
      { include: "#shebang" },
    ],
    repository: {
      "access-modifier": {
        match:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(abstract|declare|override|public|protected|private|readonly|static)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
        name: "storage.modifier.ts",
      },
      "after-operator-block-as-object-literal": {
        begin:
          "(?<!\\+\\+|--)(?<=[:=(,\\[?+!>]|^await|[^\\._$0-9A-Za-z]await|^return|[^\\._$0-9A-Za-z]return|^yield|[^\\._$0-9A-Za-z]yield|^throw|[^\\._$0-9A-Za-z]throw|^in|[^\\._$0-9A-Za-z]in|^of|[^\\._$0-9A-Za-z]of|^typeof|[^\\._$0-9A-Za-z]typeof|&&|\\|\\||\\*)\\s*(\\{)",
        beginCaptures: { 1: { name: "punctuation.definition.block.ts" } },
        end: "\\}",
        endCaptures: { 0: { name: "punctuation.definition.block.ts" } },
        name: "meta.objectliteral.ts",
        patterns: [{ include: "#object-member" }],
      },
      "array-binding-pattern": {
        begin: "(?:(\\.\\.\\.)\\s*)?(\\[)",
        beginCaptures: {
          1: { name: "keyword.operator.rest.ts" },
          2: { name: "punctuation.definition.binding-pattern.array.ts" },
        },
        end: "\\]",
        endCaptures: {
          0: { name: "punctuation.definition.binding-pattern.array.ts" },
        },
        patterns: [
          { include: "#binding-element" },
          { include: "#punctuation-comma" },
        ],
      },
      "array-binding-pattern-const": {
        begin: "(?:(\\.\\.\\.)\\s*)?(\\[)",
        beginCaptures: {
          1: { name: "keyword.operator.rest.ts" },
          2: { name: "punctuation.definition.binding-pattern.array.ts" },
        },
        end: "\\]",
        endCaptures: {
          0: { name: "punctuation.definition.binding-pattern.array.ts" },
        },
        patterns: [
          { include: "#binding-element-const" },
          { include: "#punctuation-comma" },
        ],
      },
      "array-literal": {
        begin: "\\s*(\\[)",
        beginCaptures: { 1: { name: "meta.brace.square.ts" } },
        end: "\\]",
        endCaptures: { 0: { name: "meta.brace.square.ts" } },
        name: "meta.array.literal.ts",
        patterns: [
          { include: "#expression" },
          { include: "#punctuation-comma" },
        ],
      },
      "arrow-function": {
        patterns: [
          {
            captures: {
              1: { name: "storage.modifier.async.ts" },
              2: { name: "variable.parameter.ts" },
            },
            match:
              "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(\\basync)\\s+)?([_$A-Za-z][_$0-9A-Za-z]*)\\s*(?==>)",
            name: "meta.arrow.ts",
          },
          {
            begin:
              "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(\\basync))?((?<![})!\\]])\\s*(?=((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))",
            beginCaptures: { 1: { name: "storage.modifier.async.ts" } },
            end: "(?==>|\\{|(^\\s*(export|function|class|interface|let|var|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|const|import|enum|namespace|module|type|abstract|declare)\\s+))",
            name: "meta.arrow.ts",
            patterns: [
              { include: "#comment" },
              { include: "#type-parameters" },
              { include: "#function-parameters" },
              { include: "#arrow-return-type" },
              { include: "#possibly-arrow-return-type" },
            ],
          },
          {
            begin: "=>",
            beginCaptures: { 0: { name: "storage.type.function.arrow.ts" } },
            end: "((?<=\\}|\\S)(?<!=>)|((?!\\{)(?=\\S)))(?!\\/[\\/\\*])",
            name: "meta.arrow.ts",
            patterns: [
              { include: "#single-line-comment-consuming-line-ending" },
              { include: "#decl-block" },
              { include: "#expression" },
            ],
          },
        ],
      },
      "arrow-return-type": {
        begin: "(?<=\\))\\s*(:)",
        beginCaptures: { 1: { name: "keyword.operator.type.annotation.ts" } },
        end: "(?==>|\\{|(^\\s*(export|function|class|interface|let|var|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|const|import|enum|namespace|module|type|abstract|declare)\\s+))",
        name: "meta.return.type.arrow.ts",
        patterns: [{ include: "#arrow-return-type-body" }],
      },
      "arrow-return-type-body": {
        patterns: [
          {
            begin: "(?<=[:])(?=\\s*\\{)",
            end: "(?<=\\})",
            patterns: [{ include: "#type-object" }],
          },
          { include: "#type-predicate-operator" },
          { include: "#type" },
        ],
      },
      "async-modifier": {
        match:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(async)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
        name: "storage.modifier.async.ts",
      },
      "binding-element": {
        patterns: [
          { include: "#comment" },
          { include: "#string" },
          { include: "#numeric-literal" },
          { include: "#regex" },
          { include: "#object-binding-pattern" },
          { include: "#array-binding-pattern" },
          { include: "#destructuring-variable-rest" },
          { include: "#variable-initializer" },
        ],
      },
      "binding-element-const": {
        patterns: [
          { include: "#comment" },
          { include: "#string" },
          { include: "#numeric-literal" },
          { include: "#regex" },
          { include: "#object-binding-pattern-const" },
          { include: "#array-binding-pattern-const" },
          { include: "#destructuring-variable-rest-const" },
          { include: "#variable-initializer" },
        ],
      },
      "boolean-literal": {
        patterns: [
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))true(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "constant.language.boolean.true.ts",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))false(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "constant.language.boolean.false.ts",
          },
        ],
      },
      brackets: {
        patterns: [
          {
            begin: "{",
            end: "}|(?=\\*/)",
            patterns: [{ include: "#brackets" }],
          },
          {
            begin: "\\[",
            end: "\\]|(?=\\*/)",
            patterns: [{ include: "#brackets" }],
          },
        ],
      },
      cast: {
        patterns: [
          {
            captures: {
              1: { name: "meta.brace.angle.ts" },
              2: { name: "storage.modifier.ts" },
              3: { name: "meta.brace.angle.ts" },
            },
            match: "\\s*(<)\\s*(const)\\s*(>)",
            name: "cast.expr.ts",
          },
          {
            begin:
              "(?:(?<!\\+\\+|--)(?<=^return|[^\\._$0-9A-Za-z]return|^throw|[^\\._$0-9A-Za-z]throw|^yield|[^\\._$0-9A-Za-z]yield|^await|[^\\._$0-9A-Za-z]await|^default|[^\\._$0-9A-Za-z]default|[=(,:>*?\\&\\|\\^]|[^_$0-9A-Za-z](?:\\+\\+|\\-\\-)|[^\\+]\\+|[^\\-]\\-))\\s*(<)(?!<?\\=)(?!\\s*$)",
            beginCaptures: { 1: { name: "meta.brace.angle.ts" } },
            end: "(\\>)",
            endCaptures: { 1: { name: "meta.brace.angle.ts" } },
            name: "cast.expr.ts",
            patterns: [{ include: "#type" }],
          },
          {
            begin: "(?:(?<=^))\\s*(<)(?=[_$A-Za-z][_$0-9A-Za-z]*\\s*>)",
            beginCaptures: { 1: { name: "meta.brace.angle.ts" } },
            end: "(\\>)",
            endCaptures: { 1: { name: "meta.brace.angle.ts" } },
            name: "cast.expr.ts",
            patterns: [{ include: "#type" }],
          },
        ],
      },
      "class-declaration": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(?:(abstract)\\s+)?\\b(class)\\b(?=\\s+|/[/*])",
        beginCaptures: {
          1: { name: "keyword.control.export.ts" },
          2: { name: "storage.modifier.ts" },
          3: { name: "storage.modifier.ts" },
          4: { name: "storage.type.class.ts" },
        },
        end: "(?<=\\})",
        name: "meta.class.ts",
        patterns: [{ include: "#class-declaration-or-expression-patterns" }],
      },
      "class-declaration-or-expression-patterns": {
        patterns: [
          { include: "#comment" },
          { include: "#class-or-interface-heritage" },
          {
            captures: { 0: { name: "entity.name.type.class.ts" } },
            match: "[_$A-Za-z][_$0-9A-Za-z]*",
          },
          { include: "#type-parameters" },
          { include: "#class-or-interface-body" },
        ],
      },
      "class-expression": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(abstract)\\s+)?(class)\\b(?=\\s+|[<{]|\\/[\\/*])",
        beginCaptures: {
          1: { name: "storage.modifier.ts" },
          2: { name: "storage.type.class.ts" },
        },
        end: "(?<=\\})",
        name: "meta.class.ts",
        patterns: [{ include: "#class-declaration-or-expression-patterns" }],
      },
      "class-or-interface-body": {
        begin: "\\{",
        beginCaptures: { 0: { name: "punctuation.definition.block.ts" } },
        end: "\\}",
        endCaptures: { 0: { name: "punctuation.definition.block.ts" } },
        patterns: [
          { include: "#comment" },
          { include: "#decorator" },
          {
            begin: "(?<=:)\\s*",
            end: "(?=\\s|[;),}\\]:\\-\\+]|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))",
            patterns: [{ include: "#expression" }],
          },
          { include: "#method-declaration" },
          { include: "#indexer-declaration" },
          { include: "#field-declaration" },
          { include: "#string" },
          { include: "#type-annotation" },
          { include: "#variable-initializer" },
          { include: "#access-modifier" },
          { include: "#property-accessor" },
          { include: "#async-modifier" },
          { include: "#after-operator-block-as-object-literal" },
          { include: "#decl-block" },
          { include: "#expression" },
          { include: "#punctuation-comma" },
          { include: "#punctuation-semicolon" },
        ],
      },
      "class-or-interface-heritage": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(extends|implements)\\b)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
        beginCaptures: { 1: { name: "storage.modifier.ts" } },
        end: "(?=\\{)",
        patterns: [
          { include: "#comment" },
          { include: "#class-or-interface-heritage" },
          { include: "#type-parameters" },
          { include: "#expressionWithoutIdentifiers" },
          {
            captures: {
              1: { name: "entity.name.type.module.ts" },
              2: { name: "punctuation.accessor.ts" },
              3: { name: "punctuation.accessor.optional.ts" },
            },
            match:
              "([_$A-Za-z][_$0-9A-Za-z]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[\\d])))(?=\\s*[_$A-Za-z][_$0-9A-Za-z]*(\\s*\\??\\.\\s*[_$A-Za-z][_$0-9A-Za-z]*)*\\s*)",
          },
          {
            captures: { 1: { name: "entity.other.inherited-class.ts" } },
            match: "([_$A-Za-z][_$0-9A-Za-z]*)",
          },
          { include: "#expressionPunctuations" },
        ],
      },
      comment: {
        patterns: [
          {
            begin: "/\\*\\*(?!/)",
            beginCaptures: { 0: { name: "punctuation.definition.comment.ts" } },
            end: "\\*/",
            endCaptures: { 0: { name: "punctuation.definition.comment.ts" } },
            name: "comment.block.documentation.ts",
            patterns: [{ include: "#docblock" }],
          },
          {
            begin: "(/\\*)(?:\\s*((@)internal)(?=\\s|(\\*/)))?",
            beginCaptures: {
              1: { name: "punctuation.definition.comment.ts" },
              2: { name: "storage.type.internaldeclaration.ts" },
              3: { name: "punctuation.decorator.internaldeclaration.ts" },
            },
            end: "\\*/",
            endCaptures: { 0: { name: "punctuation.definition.comment.ts" } },
            name: "comment.block.ts",
          },
          {
            begin: "(^[ \\t]+)?((//)(?:\\s*((@)internal)(?=\\s|$))?)",
            beginCaptures: {
              1: { name: "punctuation.whitespace.comment.leading.ts" },
              2: { name: "comment.line.double-slash.ts" },
              3: { name: "punctuation.definition.comment.ts" },
              4: { name: "storage.type.internaldeclaration.ts" },
              5: { name: "punctuation.decorator.internaldeclaration.ts" },
            },
            contentName: "comment.line.double-slash.ts",
            end: "(?=$)",
          },
        ],
      },
      "control-statement": {
        patterns: [
          { include: "#switch-statement" },
          { include: "#for-loop" },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(catch|finally|throw|try)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.control.trycatch.ts",
          },
          {
            captures: {
              1: { name: "keyword.control.loop.ts" },
              2: { name: "entity.name.label.ts" },
            },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(break|continue|goto)\\s+([_$A-Za-z][_$0-9A-Za-z]*)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(break|continue|do|goto|while)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.control.loop.ts",
          },
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(return)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            beginCaptures: { 0: { name: "keyword.control.flow.ts" } },
            end: "(?=[;}]|$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))",
            patterns: [{ include: "#expression" }],
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(case|default|switch)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.control.switch.ts",
          },
          { include: "#if-statement" },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(else|if)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.control.conditional.ts",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(with)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.control.with.ts",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(package)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.control.ts",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(debugger)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.other.debugger.ts",
          },
        ],
      },
      "decl-block": {
        begin: "\\{",
        beginCaptures: { 0: { name: "punctuation.definition.block.ts" } },
        end: "\\}",
        endCaptures: { 0: { name: "punctuation.definition.block.ts" } },
        name: "meta.block.ts",
        patterns: [{ include: "#statements" }],
      },
      declaration: {
        patterns: [
          { include: "#decorator" },
          { include: "#var-expr" },
          { include: "#function-declaration" },
          { include: "#class-declaration" },
          { include: "#interface-declaration" },
          { include: "#enum-declaration" },
          { include: "#namespace-declaration" },
          { include: "#type-alias-declaration" },
          { include: "#import-equals-declaration" },
          { include: "#import-declaration" },
          { include: "#export-declaration" },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(declare|export)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "storage.modifier.ts",
          },
        ],
      },
      decorator: {
        begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))\\@",
        beginCaptures: { 0: { name: "punctuation.decorator.ts" } },
        end: "(?=\\s)",
        name: "meta.decorator.ts",
        patterns: [{ include: "#expression" }],
      },
      "destructuring-const": {
        patterns: [
          {
            begin:
              "(?<!=|:|^of|[^\\._$0-9A-Za-z]of|^in|[^\\._$0-9A-Za-z]in)\\s*(?=\\{)",
            end: "(?=$|^|[;,=}]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            name: "meta.object-binding-pattern-variable.ts",
            patterns: [
              { include: "#object-binding-pattern-const" },
              { include: "#type-annotation" },
              { include: "#comment" },
            ],
          },
          {
            begin:
              "(?<!=|:|^of|[^\\._$0-9A-Za-z]of|^in|[^\\._$0-9A-Za-z]in)\\s*(?=\\[)",
            end: "(?=$|^|[;,=}]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            name: "meta.array-binding-pattern-variable.ts",
            patterns: [
              { include: "#array-binding-pattern-const" },
              { include: "#type-annotation" },
              { include: "#comment" },
            ],
          },
        ],
      },
      "destructuring-parameter": {
        patterns: [
          {
            begin: "(?<!=|:)\\s*(?:(\\.\\.\\.)\\s*)?(\\{)",
            beginCaptures: {
              1: { name: "keyword.operator.rest.ts" },
              2: { name: "punctuation.definition.binding-pattern.object.ts" },
            },
            end: "\\}",
            endCaptures: {
              0: { name: "punctuation.definition.binding-pattern.object.ts" },
            },
            name: "meta.parameter.object-binding-pattern.ts",
            patterns: [{ include: "#parameter-object-binding-element" }],
          },
          {
            begin: "(?<!=|:)\\s*(?:(\\.\\.\\.)\\s*)?(\\[)",
            beginCaptures: {
              1: { name: "keyword.operator.rest.ts" },
              2: { name: "punctuation.definition.binding-pattern.array.ts" },
            },
            end: "\\]",
            endCaptures: {
              0: { name: "punctuation.definition.binding-pattern.array.ts" },
            },
            name: "meta.paramter.array-binding-pattern.ts",
            patterns: [
              { include: "#parameter-binding-element" },
              { include: "#punctuation-comma" },
            ],
          },
        ],
      },
      "destructuring-parameter-rest": {
        captures: {
          1: { name: "keyword.operator.rest.ts" },
          2: { name: "variable.parameter.ts" },
        },
        match: "(?:(\\.\\.\\.)\\s*)?([_$A-Za-z][_$0-9A-Za-z]*)",
      },
      "destructuring-variable": {
        patterns: [
          {
            begin:
              "(?<!=|:|^of|[^\\._$0-9A-Za-z]of|^in|[^\\._$0-9A-Za-z]in)\\s*(?=\\{)",
            end: "(?=$|^|[;,=}]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            name: "meta.object-binding-pattern-variable.ts",
            patterns: [
              { include: "#object-binding-pattern" },
              { include: "#type-annotation" },
              { include: "#comment" },
            ],
          },
          {
            begin:
              "(?<!=|:|^of|[^\\._$0-9A-Za-z]of|^in|[^\\._$0-9A-Za-z]in)\\s*(?=\\[)",
            end: "(?=$|^|[;,=}]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            name: "meta.array-binding-pattern-variable.ts",
            patterns: [
              { include: "#array-binding-pattern" },
              { include: "#type-annotation" },
              { include: "#comment" },
            ],
          },
        ],
      },
      "destructuring-variable-rest": {
        captures: {
          1: { name: "keyword.operator.rest.ts" },
          2: {
            name: "meta.definition.variable.ts variable.other.readwrite.ts",
          },
        },
        match: "(?:(\\.\\.\\.)\\s*)?([_$A-Za-z][_$0-9A-Za-z]*)",
      },
      "destructuring-variable-rest-const": {
        captures: {
          1: { name: "keyword.operator.rest.ts" },
          2: { name: "meta.definition.variable.ts variable.other.constant.ts" },
        },
        match: "(?:(\\.\\.\\.)\\s*)?([_$A-Za-z][_$0-9A-Za-z]*)",
      },
      directives: {
        begin:
          "^(///)\\s*(?=<(reference|amd-dependency|amd-module)(\\s+(path|types|no-default-lib|lib|name|resolution-mode)\\s*=\\s*((\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)))+\\s*/>\\s*$)",
        beginCaptures: { 1: { name: "punctuation.definition.comment.ts" } },
        end: "(?=$)",
        name: "comment.line.triple-slash.directive.ts",
        patterns: [
          {
            begin: "(<)(reference|amd-dependency|amd-module)",
            beginCaptures: {
              1: { name: "punctuation.definition.tag.directive.ts" },
              2: { name: "entity.name.tag.directive.ts" },
            },
            end: "/>",
            endCaptures: {
              0: { name: "punctuation.definition.tag.directive.ts" },
            },
            name: "meta.tag.ts",
            patterns: [
              {
                match: "path|types|no-default-lib|lib|name|resolution-mode",
                name: "entity.other.attribute-name.directive.ts",
              },
              { match: "=", name: "keyword.operator.assignment.ts" },
              { include: "#string" },
            ],
          },
        ],
      },
      docblock: {
        patterns: [
          {
            captures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
              3: { name: "constant.language.access-type.jsdoc" },
            },
            match: "((@)(?:access|api))\\s+(private|protected|public)\\b",
          },
          {
            captures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
              3: { name: "entity.name.type.instance.jsdoc" },
              4: { name: "punctuation.definition.bracket.angle.begin.jsdoc" },
              5: { name: "constant.other.email.link.underline.jsdoc" },
              6: { name: "punctuation.definition.bracket.angle.end.jsdoc" },
            },
            match:
              "((@)author)\\s+([^@\\s<>*/](?:[^@<>*/]|\\*[^/])*)(?:\\s*(<)([^>\\s]+)(>))?",
          },
          {
            captures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
              3: { name: "entity.name.type.instance.jsdoc" },
              4: { name: "keyword.operator.control.jsdoc" },
              5: { name: "entity.name.type.instance.jsdoc" },
            },
            match:
              "((@)borrows)\\s+((?:[^@\\s*/]|\\*[^/])+)\\s+(as)\\s+((?:[^@\\s*/]|\\*[^/])+)",
          },
          {
            begin: "((@)example)\\s+",
            beginCaptures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
            },
            end: "(?=@|\\*/)",
            name: "meta.example.jsdoc",
            patterns: [
              { match: "^\\s\\*\\s+" },
              {
                begin: "\\G(<)caption(>)",
                beginCaptures: {
                  0: { name: "entity.name.tag.inline.jsdoc" },
                  1: {
                    name: "punctuation.definition.bracket.angle.begin.jsdoc",
                  },
                  2: { name: "punctuation.definition.bracket.angle.end.jsdoc" },
                },
                contentName: "constant.other.description.jsdoc",
                end: "(</)caption(>)|(?=\\*/)",
                endCaptures: {
                  0: { name: "entity.name.tag.inline.jsdoc" },
                  1: {
                    name: "punctuation.definition.bracket.angle.begin.jsdoc",
                  },
                  2: { name: "punctuation.definition.bracket.angle.end.jsdoc" },
                },
              },
              {
                captures: { 0: { name: "source.embedded.ts" } },
                match: "[^\\s@*](?:[^*]|\\*[^/])*",
              },
            ],
          },
          {
            captures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
              3: { name: "constant.language.symbol-type.jsdoc" },
            },
            match:
              "((@)kind)\\s+(class|constant|event|external|file|function|member|mixin|module|namespace|typedef)\\b",
          },
          {
            captures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
              3: { name: "variable.other.link.underline.jsdoc" },
              4: { name: "entity.name.type.instance.jsdoc" },
            },
            match:
              "((@)see)\\s+(?:((?=https?://)(?:[^\\s*]|\\*[^/])+)|((?!https?://|(?:\\[[^\\[\\]]*\\])?{@(?:link|linkcode|linkplain|tutorial)\\b)(?:[^@\\s*/]|\\*[^/])+))",
          },
          {
            captures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
              3: { name: "variable.other.jsdoc" },
            },
            match:
              "((@)template)\\s+([A-Za-z_$][\\w$.\\[\\]]*(?:\\s*,\\s*[A-Za-z_$][\\w$.\\[\\]]*)*)",
          },
          {
            begin: "((@)template)\\s+(?={)",
            beginCaptures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
            },
            end: "(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])",
            patterns: [
              { include: "#jsdoctype" },
              {
                match: "([A-Za-z_$][\\w$.\\[\\]]*)",
                name: "variable.other.jsdoc",
              },
            ],
          },
          {
            captures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
              3: { name: "variable.other.jsdoc" },
            },
            match:
              "((@)(?:arg|argument|const|constant|member|namespace|param|var))\\s+([A-Za-z_$][\\w$.\\[\\]]*)",
          },
          {
            begin: "((@)typedef)\\s+(?={)",
            beginCaptures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
            },
            end: "(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])",
            patterns: [
              { include: "#jsdoctype" },
              {
                match: "(?:[^@\\s*/]|\\*[^/])+",
                name: "entity.name.type.instance.jsdoc",
              },
            ],
          },
          {
            begin:
              "((@)(?:arg|argument|const|constant|member|namespace|param|prop|property|var))\\s+(?={)",
            beginCaptures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
            },
            end: "(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])",
            patterns: [
              { include: "#jsdoctype" },
              {
                match: "([A-Za-z_$][\\w$.\\[\\]]*)",
                name: "variable.other.jsdoc",
              },
              {
                captures: {
                  1: {
                    name: "punctuation.definition.optional-value.begin.bracket.square.jsdoc",
                  },
                  2: { name: "keyword.operator.assignment.jsdoc" },
                  3: { name: "source.embedded.ts" },
                  4: {
                    name: "punctuation.definition.optional-value.end.bracket.square.jsdoc",
                  },
                  5: { name: "invalid.illegal.syntax.jsdoc" },
                },
                match:
                  "(\\[)\\s*[\\w$]+(?:(?:\\[\\])?\\.[\\w$]+)*(?:\\s*(=)\\s*((?>\"(?:(?:\\*(?!/))|(?:\\\\(?!\"))|[^*\\\\])*?\"|'(?:(?:\\*(?!/))|(?:\\\\(?!'))|[^*\\\\])*?'|\\[(?:(?:\\*(?!/))|[^*])*?\\]|(?:(?:\\*(?!/))|\\s(?!\\s*\\])|\\[.*?(?:\\]|(?=\\*/))|[^*\\s\\[\\]])*)*))?\\s*(?:(\\])((?:[^*\\s]|\\*[^\\s/])+)?|(?=\\*/))",
                name: "variable.other.jsdoc",
              },
            ],
          },
          {
            begin:
              "((@)(?:define|enum|exception|export|extends|lends|implements|modifies|namespace|private|protected|returns?|satisfies|suppress|this|throws|type|yields?))\\s+(?={)",
            beginCaptures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
            },
            end: "(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])",
            patterns: [{ include: "#jsdoctype" }],
          },
          {
            captures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
              3: { name: "entity.name.type.instance.jsdoc" },
            },
            match:
              "((@)(?:alias|augments|callback|constructs|emits|event|fires|exports?|extends|external|function|func|host|lends|listens|interface|memberof!?|method|module|mixes|mixin|name|requires|see|this|typedef|uses))\\s+((?:[^{}@\\s*]|\\*[^/])+)",
          },
          {
            begin: "((@)(?:default(?:value)?|license|version))\\s+(([''\"]))",
            beginCaptures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
              3: { name: "variable.other.jsdoc" },
              4: { name: "punctuation.definition.string.begin.jsdoc" },
            },
            contentName: "variable.other.jsdoc",
            end: "(\\3)|(?=$|\\*/)",
            endCaptures: {
              0: { name: "variable.other.jsdoc" },
              1: { name: "punctuation.definition.string.end.jsdoc" },
            },
          },
          {
            captures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
              3: { name: "variable.other.jsdoc" },
            },
            match:
              "((@)(?:default(?:value)?|license|tutorial|variation|version))\\s+([^\\s*]+)",
          },
          {
            captures: { 1: { name: "punctuation.definition.block.tag.jsdoc" } },
            match:
              "(@)(?:abstract|access|alias|api|arg|argument|async|attribute|augments|author|beta|borrows|bubbles|callback|chainable|class|classdesc|code|config|const|constant|constructor|constructs|copyright|default|defaultvalue|define|deprecated|desc|description|dict|emits|enum|event|example|exception|exports?|extends|extension(?:_?for)?|external|externs|file|fileoverview|final|fires|for|func|function|generator|global|hideconstructor|host|ignore|implements|implicitCast|inherit[Dd]oc|inner|instance|interface|internal|kind|lends|license|listens|main|member|memberof!?|method|mixes|mixins?|modifies|module|name|namespace|noalias|nocollapse|nocompile|nosideeffects|override|overview|package|param|polymer(?:Behavior)?|preserve|private|prop|property|protected|public|read[Oo]nly|record|require[ds]|returns?|see|since|static|struct|submodule|summary|suppress|template|this|throws|todo|tutorial|type|typedef|unrestricted|uses|var|variation|version|virtual|writeOnce|yields?)\\b",
            name: "storage.type.class.jsdoc",
          },
          { include: "#inline-tags" },
          {
            captures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
            },
            match: "((@)(?:[_$A-Za-z][_$0-9A-Za-z]*))(?=\\s+)",
          },
        ],
      },
      "enum-declaration": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?(?:\\b(const)\\s+)?\\b(enum)\\s+([_$A-Za-z][_$0-9A-Za-z]*)",
        beginCaptures: {
          1: { name: "keyword.control.export.ts" },
          2: { name: "storage.modifier.ts" },
          3: { name: "storage.modifier.ts" },
          4: { name: "storage.type.enum.ts" },
          5: { name: "entity.name.type.enum.ts" },
        },
        end: "(?<=\\})",
        name: "meta.enum.declaration.ts",
        patterns: [
          { include: "#comment" },
          {
            begin: "\\{",
            beginCaptures: { 0: { name: "punctuation.definition.block.ts" } },
            end: "\\}",
            endCaptures: { 0: { name: "punctuation.definition.block.ts" } },
            patterns: [
              { include: "#comment" },
              {
                begin: "([_$A-Za-z][_$0-9A-Za-z]*)",
                beginCaptures: { 0: { name: "variable.other.enummember.ts" } },
                end: "(?=,|\\}|$)",
                patterns: [
                  { include: "#comment" },
                  { include: "#variable-initializer" },
                ],
              },
              {
                begin:
                  "(?=((\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\])))",
                end: "(?=,|\\}|$)",
                patterns: [
                  { include: "#string" },
                  { include: "#array-literal" },
                  { include: "#comment" },
                  { include: "#variable-initializer" },
                ],
              },
              { include: "#punctuation-comma" },
            ],
          },
        ],
      },
      "export-declaration": {
        patterns: [
          {
            captures: {
              1: { name: "keyword.control.export.ts" },
              2: { name: "keyword.control.as.ts" },
              3: { name: "storage.type.namespace.ts" },
              4: { name: "entity.name.type.module.ts" },
            },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)\\s+(as)\\s+(namespace)\\s+([_$A-Za-z][_$0-9A-Za-z]*)",
          },
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)(?:\\s+(type))?(?:(?:\\s*(=))|(?:\\s+(default)(?=\\s+)))",
            beginCaptures: {
              1: { name: "keyword.control.export.ts" },
              2: { name: "keyword.control.type.ts" },
              3: { name: "keyword.operator.assignment.ts" },
              4: { name: "keyword.control.default.ts" },
            },
            end: "(?=$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))",
            name: "meta.export.default.ts",
            patterns: [
              { include: "#interface-declaration" },
              { include: "#expression" },
            ],
          },
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)(?:\\s+(type))?\\b(?!(\\$)|(\\s*:))((?=\\s*[\\{*])|((?=\\s*[_$A-Za-z][_$0-9A-Za-z]*(\\s|,))(?!\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b)))",
            beginCaptures: {
              1: { name: "keyword.control.export.ts" },
              2: { name: "keyword.control.type.ts" },
            },
            end: "(?=$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))",
            name: "meta.export.ts",
            patterns: [{ include: "#import-export-declaration" }],
          },
        ],
      },
      expression: {
        patterns: [
          { include: "#expressionWithoutIdentifiers" },
          { include: "#identifiers" },
          { include: "#expressionPunctuations" },
        ],
      },
      "expression-inside-possibly-arrow-parens": {
        patterns: [
          { include: "#expressionWithoutIdentifiers" },
          { include: "#comment" },
          { include: "#string" },
          { include: "#decorator" },
          { include: "#destructuring-parameter" },
          {
            captures: { 1: { name: "storage.modifier.ts" } },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|protected|private|readonly)\\s+(?=(override|public|protected|private|readonly)\\s+)",
          },
          {
            captures: {
              1: { name: "storage.modifier.ts" },
              2: { name: "keyword.operator.rest.ts" },
              3: { name: "entity.name.function.ts variable.language.this.ts" },
              4: { name: "entity.name.function.ts" },
              5: { name: "keyword.operator.optional.ts" },
            },
            match:
              "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$A-Za-z][_$0-9A-Za-z]*))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)(?=\\s*(=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))|(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$0-9A-Za-z]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))))|(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))",
          },
          {
            captures: {
              1: { name: "storage.modifier.ts" },
              2: { name: "keyword.operator.rest.ts" },
              3: { name: "variable.parameter.ts variable.language.this.ts" },
              4: { name: "variable.parameter.ts" },
              5: { name: "keyword.operator.optional.ts" },
            },
            match:
              "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$A-Za-z][_$0-9A-Za-z]*))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)(?=\\s*[:,]|$)",
          },
          { include: "#type-annotation" },
          { include: "#variable-initializer" },
          { match: ",", name: "punctuation.separator.parameter.ts" },
          { include: "#identifiers" },
          { include: "#expressionPunctuations" },
        ],
      },
      "expression-operators": {
        patterns: [
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(await)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.control.flow.ts",
          },
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(yield)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))(?=\\s*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*\\*)",
            beginCaptures: { 1: { name: "keyword.control.flow.ts" } },
            end: "\\*",
            endCaptures: { 0: { name: "keyword.generator.asterisk.ts" } },
            patterns: [{ include: "#comment" }],
          },
          {
            captures: {
              1: { name: "keyword.control.flow.ts" },
              2: { name: "keyword.generator.asterisk.ts" },
            },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(yield)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))(?:\\s*(\\*))?",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))delete(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.operator.expression.delete.ts",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))in(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))(?!\\()",
            name: "keyword.operator.expression.in.ts",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))of(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))(?!\\()",
            name: "keyword.operator.expression.of.ts",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))instanceof(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.operator.expression.instanceof.ts",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))new(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.operator.new.ts",
          },
          { include: "#typeof-operator" },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))void(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.operator.expression.void.ts",
          },
          {
            captures: {
              1: { name: "keyword.control.as.ts" },
              2: { name: "storage.modifier.ts" },
            },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+(const)(?=\\s*($|[;,:})\\]]))",
          },
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(as)|(satisfies))\\s+",
            beginCaptures: {
              1: { name: "keyword.control.as.ts" },
              2: { name: "keyword.control.satisfies.ts" },
            },
            end: "(?=^|[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(as|satisfies)\\s+)|(\\s+\\<))",
            patterns: [{ include: "#type" }],
          },
          { match: "\\.\\.\\.", name: "keyword.operator.spread.ts" },
          {
            match: "\\*=|(?<!\\()/=|%=|\\+=|\\-=",
            name: "keyword.operator.assignment.compound.ts",
          },
          {
            match: "\\&=|\\^=|<<=|>>=|>>>=|\\|=",
            name: "keyword.operator.assignment.compound.bitwise.ts",
          },
          { match: "<<|>>>|>>", name: "keyword.operator.bitwise.shift.ts" },
          { match: "===|!==|==|!=", name: "keyword.operator.comparison.ts" },
          { match: "<=|>=|<>|<|>", name: "keyword.operator.relational.ts" },
          {
            captures: {
              1: { name: "keyword.operator.logical.ts" },
              2: { name: "keyword.operator.assignment.compound.ts" },
              3: { name: "keyword.operator.arithmetic.ts" },
            },
            match: "(?<=[_$0-9A-Za-z])(\\!)\\s*(?:(/=)|(?:(/)(?![/*])))",
          },
          {
            match: "\\!|&&|\\|\\||\\?\\?",
            name: "keyword.operator.logical.ts",
          },
          { match: "\\&|~|\\^|\\|", name: "keyword.operator.bitwise.ts" },
          { match: "\\=", name: "keyword.operator.assignment.ts" },
          { match: "--", name: "keyword.operator.decrement.ts" },
          { match: "\\+\\+", name: "keyword.operator.increment.ts" },
          { match: "%|\\*|/|-|\\+", name: "keyword.operator.arithmetic.ts" },
          {
            begin:
              "(?<=[_$0-9A-Za-z)\\]])\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)+(?:(/=)|(?:(/)(?![/*]))))",
            end: "(?:(/=)|(?:(/)(?!\\*([^\\*]|(\\*[^\\/]))*\\*\\/)))",
            endCaptures: {
              1: { name: "keyword.operator.assignment.compound.ts" },
              2: { name: "keyword.operator.arithmetic.ts" },
            },
            patterns: [{ include: "#comment" }],
          },
          {
            captures: {
              1: { name: "keyword.operator.assignment.compound.ts" },
              2: { name: "keyword.operator.arithmetic.ts" },
            },
            match: "(?<=[_$0-9A-Za-z)\\]])\\s*(?:(/=)|(?:(/)(?![/*])))",
          },
        ],
      },
      expressionPunctuations: {
        patterns: [
          { include: "#punctuation-comma" },
          { include: "#punctuation-accessor" },
        ],
      },
      expressionWithoutIdentifiers: {
        patterns: [
          { include: "#string" },
          { include: "#regex" },
          { include: "#comment" },
          { include: "#function-expression" },
          { include: "#class-expression" },
          { include: "#arrow-function" },
          { include: "#paren-expression-possibly-arrow" },
          { include: "#cast" },
          { include: "#ternary-expression" },
          { include: "#new-expr" },
          { include: "#instanceof-expr" },
          { include: "#object-literal" },
          { include: "#expression-operators" },
          { include: "#function-call" },
          { include: "#literal" },
          { include: "#support-objects" },
          { include: "#paren-expression" },
        ],
      },
      "field-declaration": {
        begin:
          "(?<!\\()(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(readonly)\\s+)?(?=\\s*((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|(\\#?[_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(?:(?:(\\?)|(\\!))\\s*)?(=|:|;|,|\\}|$))",
        beginCaptures: { 1: { name: "storage.modifier.ts" } },
        end: "(?=\\}|;|,|$|(^(?!\\s*((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|(\\#?[_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(?:(?:(\\?)|(\\!))\\s*)?(=|:|;|,|$))))|(?<=\\})",
        name: "meta.field.declaration.ts",
        patterns: [
          { include: "#variable-initializer" },
          { include: "#type-annotation" },
          { include: "#string" },
          { include: "#array-literal" },
          { include: "#numeric-literal" },
          { include: "#comment" },
          {
            captures: {
              1: {
                name: "meta.definition.property.ts entity.name.function.ts",
              },
              2: { name: "keyword.operator.optional.ts" },
              3: { name: "keyword.operator.definiteassignment.ts" },
            },
            match:
              "(\\#?[_$A-Za-z][_$0-9A-Za-z]*)(?:(\\?)|(\\!))?(?=\\s*\\s*(=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))|(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$0-9A-Za-z]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))))|(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))",
          },
          {
            match: "\\#?[_$A-Za-z][_$0-9A-Za-z]*",
            name: "meta.definition.property.ts variable.object.property.ts",
          },
          { match: "\\?", name: "keyword.operator.optional.ts" },
          { match: "\\!", name: "keyword.operator.definiteassignment.ts" },
        ],
      },
      "for-loop": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))for(?=((\\s+|(\\s*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*))await)?\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)?(\\())",
        beginCaptures: { 0: { name: "keyword.control.loop.ts" } },
        end: "(?<=\\))",
        patterns: [
          { include: "#comment" },
          { match: "await", name: "keyword.control.loop.ts" },
          {
            begin: "\\(",
            beginCaptures: { 0: { name: "meta.brace.round.ts" } },
            end: "\\)",
            endCaptures: { 0: { name: "meta.brace.round.ts" } },
            patterns: [
              { include: "#var-expr" },
              { include: "#expression" },
              { include: "#punctuation-semicolon" },
            ],
          },
        ],
      },
      "function-body": {
        patterns: [
          { include: "#comment" },
          { include: "#type-parameters" },
          { include: "#function-parameters" },
          { include: "#return-type" },
          { include: "#type-function-return-type" },
          { include: "#decl-block" },
          { match: "\\*", name: "keyword.generator.asterisk.ts" },
        ],
      },
      "function-call": {
        patterns: [
          {
            begin:
              "(?=(((([_$A-Za-z][_$0-9A-Za-z]*)(\\s*\\??\\.\\s*(\\#?[_$A-Za-z][_$0-9A-Za-z]*))*)|(\\??\\.\\s*\\#?[_$A-Za-z][_$0-9A-Za-z]*))|(?<=[\\)]))\\s*(?:(\\?\\.\\s*)|(\\!))?((<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?\\())",
            end: "(?<=\\))(?!(((([_$A-Za-z][_$0-9A-Za-z]*)(\\s*\\??\\.\\s*(\\#?[_$A-Za-z][_$0-9A-Za-z]*))*)|(\\??\\.\\s*\\#?[_$A-Za-z][_$0-9A-Za-z]*))|(?<=[\\)]))\\s*(?:(\\?\\.\\s*)|(\\!))?((<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?\\())",
            patterns: [
              {
                begin:
                  "(?=(([_$A-Za-z][_$0-9A-Za-z]*)(\\s*\\??\\.\\s*(\\#?[_$A-Za-z][_$0-9A-Za-z]*))*)|(\\??\\.\\s*\\#?[_$A-Za-z][_$0-9A-Za-z]*))",
                end: "(?=\\s*(?:(\\?\\.\\s*)|(\\!))?((<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?\\())",
                name: "meta.function-call.ts",
                patterns: [{ include: "#function-call-target" }],
              },
              { include: "#comment" },
              { include: "#function-call-optionals" },
              { include: "#type-arguments" },
              { include: "#paren-expression" },
            ],
          },
          {
            begin:
              "(?=(((([_$A-Za-z][_$0-9A-Za-z]*)(\\s*\\??\\.\\s*(\\#?[_$A-Za-z][_$0-9A-Za-z]*))*)|(\\??\\.\\s*\\#?[_$A-Za-z][_$0-9A-Za-z]*))|(?<=[\\)]))(<\\s*[\\{\\[\\(]\\s*$))",
            end: "(?<=\\>)(?!(((([_$A-Za-z][_$0-9A-Za-z]*)(\\s*\\??\\.\\s*(\\#?[_$A-Za-z][_$0-9A-Za-z]*))*)|(\\??\\.\\s*\\#?[_$A-Za-z][_$0-9A-Za-z]*))|(?<=[\\)]))(<\\s*[\\{\\[\\(]\\s*$))",
            patterns: [
              {
                begin:
                  "(?=(([_$A-Za-z][_$0-9A-Za-z]*)(\\s*\\??\\.\\s*(\\#?[_$A-Za-z][_$0-9A-Za-z]*))*)|(\\??\\.\\s*\\#?[_$A-Za-z][_$0-9A-Za-z]*))",
                end: "(?=(<\\s*[\\{\\[\\(]\\s*$))",
                name: "meta.function-call.ts",
                patterns: [{ include: "#function-call-target" }],
              },
              { include: "#comment" },
              { include: "#function-call-optionals" },
              { include: "#type-arguments" },
            ],
          },
        ],
      },
      "function-call-optionals": {
        patterns: [
          {
            match: "\\?\\.",
            name: "meta.function-call.ts punctuation.accessor.optional.ts",
          },
          {
            match: "\\!",
            name: "meta.function-call.ts keyword.operator.definiteassignment.ts",
          },
        ],
      },
      "function-call-target": {
        patterns: [
          { include: "#support-function-call-identifiers" },
          {
            match: "(\\#?[_$A-Za-z][_$0-9A-Za-z]*)",
            name: "entity.name.function.ts",
          },
        ],
      },
      "function-declaration": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?(?:(async)\\s+)?(function\\b)(?:\\s*(\\*))?(?:(?:\\s+|(?<=\\*))([_$A-Za-z][_$0-9A-Za-z]*))?\\s*",
        beginCaptures: {
          1: { name: "keyword.control.export.ts" },
          2: { name: "storage.modifier.ts" },
          3: { name: "storage.modifier.async.ts" },
          4: { name: "storage.type.function.ts" },
          5: { name: "keyword.generator.asterisk.ts" },
          6: { name: "meta.definition.function.ts entity.name.function.ts" },
        },
        end: "(?=;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))|(?<=\\})",
        name: "meta.function.ts",
        patterns: [
          { include: "#function-name" },
          { include: "#function-body" },
        ],
      },
      "function-expression": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(async)\\s+)?(function\\b)(?:\\s*(\\*))?(?:(?:\\s+|(?<=\\*))([_$A-Za-z][_$0-9A-Za-z]*))?\\s*",
        beginCaptures: {
          1: { name: "storage.modifier.async.ts" },
          2: { name: "storage.type.function.ts" },
          3: { name: "keyword.generator.asterisk.ts" },
          4: { name: "meta.definition.function.ts entity.name.function.ts" },
        },
        end: "(?=;)|(?<=\\})",
        name: "meta.function.expression.ts",
        patterns: [
          { include: "#function-name" },
          { include: "#single-line-comment-consuming-line-ending" },
          { include: "#function-body" },
        ],
      },
      "function-name": {
        match: "[_$A-Za-z][_$0-9A-Za-z]*",
        name: "meta.definition.function.ts entity.name.function.ts",
      },
      "function-parameters": {
        begin: "\\(",
        beginCaptures: {
          0: { name: "punctuation.definition.parameters.begin.ts" },
        },
        end: "\\)",
        endCaptures: {
          0: { name: "punctuation.definition.parameters.end.ts" },
        },
        name: "meta.parameters.ts",
        patterns: [{ include: "#function-parameters-body" }],
      },
      "function-parameters-body": {
        patterns: [
          { include: "#comment" },
          { include: "#string" },
          { include: "#decorator" },
          { include: "#destructuring-parameter" },
          { include: "#parameter-name" },
          { include: "#parameter-type-annotation" },
          { include: "#variable-initializer" },
          { match: ",", name: "punctuation.separator.parameter.ts" },
        ],
      },
      identifiers: {
        patterns: [
          { include: "#object-identifiers" },
          {
            captures: {
              1: { name: "punctuation.accessor.ts" },
              2: { name: "punctuation.accessor.optional.ts" },
              3: { name: "entity.name.function.ts" },
            },
            match:
              "(?:(?:(\\.)|(\\?\\.(?!\\s*[\\d])))\\s*)?([_$A-Za-z][_$0-9A-Za-z]*)(?=\\s*=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))",
          },
          {
            captures: {
              1: { name: "punctuation.accessor.ts" },
              2: { name: "punctuation.accessor.optional.ts" },
              3: { name: "variable.other.constant.property.ts" },
            },
            match:
              "(?:(\\.)|(\\?\\.(?!\\s*[\\d])))\\s*(\\#?[A-Z][_$\\dA-Z]*)(?![_$0-9A-Za-z])",
          },
          {
            captures: {
              1: { name: "punctuation.accessor.ts" },
              2: { name: "punctuation.accessor.optional.ts" },
              3: { name: "variable.other.property.ts" },
            },
            match:
              "(?:(\\.)|(\\?\\.(?!\\s*[\\d])))\\s*(\\#?[_$A-Za-z][_$0-9A-Za-z]*)",
          },
          {
            match: "([A-Z][_$\\dA-Z]*)(?![_$0-9A-Za-z])",
            name: "variable.other.constant.ts",
          },
          {
            match: "[_$A-Za-z][_$0-9A-Za-z]*",
            name: "variable.other.readwrite.ts",
          },
        ],
      },
      "if-statement": {
        patterns: [
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?=\\bif\\s*(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))\\s*(?!\\{))",
            end: "(?=;|$|\\})",
            patterns: [
              { include: "#comment" },
              {
                begin:
                  "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(if)\\s*(\\()",
                beginCaptures: {
                  1: { name: "keyword.control.conditional.ts" },
                  2: { name: "meta.brace.round.ts" },
                },
                end: "\\)",
                endCaptures: { 0: { name: "meta.brace.round.ts" } },
                patterns: [{ include: "#expression" }],
              },
              {
                begin:
                  "(?<=\\))\\s*\\/(?![\\/*])(?=(?:[^\\/\\\\\\[]|\\\\.|\\[([^\\]\\\\]|\\\\.)*\\])+\\/([dgimsuy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))",
                beginCaptures: {
                  0: { name: "punctuation.definition.string.begin.ts" },
                },
                end: "(/)([dgimsuy]*)",
                endCaptures: {
                  1: { name: "punctuation.definition.string.end.ts" },
                  2: { name: "keyword.other.ts" },
                },
                name: "string.regexp.ts",
                patterns: [{ include: "#regexp" }],
              },
              { include: "#statements" },
            ],
          },
        ],
      },
      "import-declaration": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(import)(?:\\s+(type)(?!\\s+from))?(?!\\s*[:\\(])(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
        beginCaptures: {
          1: { name: "keyword.control.export.ts" },
          2: { name: "storage.modifier.ts" },
          3: { name: "keyword.control.import.ts" },
          4: { name: "keyword.control.type.ts" },
        },
        end: "(?<!^import|[^\\._$0-9A-Za-z]import)(?=;|$|^)",
        name: "meta.import.ts",
        patterns: [
          { include: "#single-line-comment-consuming-line-ending" },
          { include: "#comment" },
          { include: "#string" },
          {
            begin: "(?<=^import|[^\\._$0-9A-Za-z]import)(?!\\s*[\"'])",
            end: "\\bfrom\\b",
            endCaptures: { 0: { name: "keyword.control.from.ts" } },
            patterns: [{ include: "#import-export-declaration" }],
          },
          { include: "#import-export-declaration" },
        ],
      },
      "import-equals-declaration": {
        patterns: [
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(import)(?:\\s+(type))?\\s+([_$A-Za-z][_$0-9A-Za-z]*)\\s*(=)\\s*(require)\\s*(\\()",
            beginCaptures: {
              1: { name: "keyword.control.export.ts" },
              2: { name: "storage.modifier.ts" },
              3: { name: "keyword.control.import.ts" },
              4: { name: "keyword.control.type.ts" },
              5: { name: "variable.other.readwrite.alias.ts" },
              6: { name: "keyword.operator.assignment.ts" },
              7: { name: "keyword.control.require.ts" },
              8: { name: "meta.brace.round.ts" },
            },
            end: "\\)",
            endCaptures: { 0: { name: "meta.brace.round.ts" } },
            name: "meta.import-equals.external.ts",
            patterns: [{ include: "#comment" }, { include: "#string" }],
          },
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(import)(?:\\s+(type))?\\s+([_$A-Za-z][_$0-9A-Za-z]*)\\s*(=)\\s*(?!require\\b)",
            beginCaptures: {
              1: { name: "keyword.control.export.ts" },
              2: { name: "storage.modifier.ts" },
              3: { name: "keyword.control.import.ts" },
              4: { name: "keyword.control.type.ts" },
              5: { name: "variable.other.readwrite.alias.ts" },
              6: { name: "keyword.operator.assignment.ts" },
            },
            end: "(?=;|$|^)",
            name: "meta.import-equals.internal.ts",
            patterns: [
              { include: "#single-line-comment-consuming-line-ending" },
              { include: "#comment" },
              {
                captures: {
                  1: { name: "entity.name.type.module.ts" },
                  2: { name: "punctuation.accessor.ts" },
                  3: { name: "punctuation.accessor.optional.ts" },
                },
                match:
                  "([_$A-Za-z][_$0-9A-Za-z]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[\\d])))",
              },
              {
                match: "([_$A-Za-z][_$0-9A-Za-z]*)",
                name: "variable.other.readwrite.ts",
              },
            ],
          },
        ],
      },
      "import-export-assert-clause": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(with)|(assert))\\s*(\\{)",
        beginCaptures: {
          1: { name: "keyword.control.with.ts" },
          2: { name: "keyword.control.assert.ts" },
          3: { name: "punctuation.definition.block.ts" },
        },
        end: "\\}",
        endCaptures: { 0: { name: "punctuation.definition.block.ts" } },
        patterns: [
          { include: "#comment" },
          { include: "#string" },
          {
            match:
              "(?:[_$A-Za-z][_$0-9A-Za-z]*)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:)",
            name: "meta.object-literal.key.ts",
          },
          { match: ":", name: "punctuation.separator.key-value.ts" },
        ],
      },
      "import-export-block": {
        begin: "\\{",
        beginCaptures: { 0: { name: "punctuation.definition.block.ts" } },
        end: "\\}",
        endCaptures: { 0: { name: "punctuation.definition.block.ts" } },
        name: "meta.block.ts",
        patterns: [{ include: "#import-export-clause" }],
      },
      "import-export-clause": {
        patterns: [
          { include: "#comment" },
          {
            captures: {
              1: { name: "keyword.control.type.ts" },
              2: { name: "keyword.control.default.ts" },
              3: { name: "constant.language.import-export-all.ts" },
              4: { name: "variable.other.readwrite.ts" },
              5: { name: "keyword.control.as.ts" },
              6: { name: "keyword.control.default.ts" },
              7: { name: "variable.other.readwrite.alias.ts" },
            },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(?:(\\btype)\\s+)?(?:(\\bdefault)|(\\*)|(\\b[_$A-Za-z][_$0-9A-Za-z]*)))\\s+(as)\\s+(?:(default(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|([_$A-Za-z][_$0-9A-Za-z]*))",
          },
          { include: "#punctuation-comma" },
          { match: "\\*", name: "constant.language.import-export-all.ts" },
          { match: "\\b(default)\\b", name: "keyword.control.default.ts" },
          {
            captures: {
              1: { name: "keyword.control.type.ts" },
              2: { name: "variable.other.readwrite.alias.ts" },
            },
            match: "(?:(\\btype)\\s+)?([_$A-Za-z][_$0-9A-Za-z]*)",
          },
        ],
      },
      "import-export-declaration": {
        patterns: [
          { include: "#comment" },
          { include: "#string" },
          { include: "#import-export-block" },
          { match: "\\bfrom\\b", name: "keyword.control.from.ts" },
          { include: "#import-export-assert-clause" },
          { include: "#import-export-clause" },
        ],
      },
      "indexer-declaration": {
        begin:
          "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(readonly)\\s*)?\\s*(\\[)\\s*([_$A-Za-z][_$0-9A-Za-z]*)\\s*(?=:)",
        beginCaptures: {
          1: { name: "storage.modifier.ts" },
          2: { name: "meta.brace.square.ts" },
          3: { name: "variable.parameter.ts" },
        },
        end: "(\\])\\s*(\\?\\s*)?|$",
        endCaptures: {
          1: { name: "meta.brace.square.ts" },
          2: { name: "keyword.operator.optional.ts" },
        },
        name: "meta.indexer.declaration.ts",
        patterns: [{ include: "#type-annotation" }],
      },
      "indexer-mapped-type-declaration": {
        begin:
          "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))([+-])?(readonly)\\s*)?\\s*(\\[)\\s*([_$A-Za-z][_$0-9A-Za-z]*)\\s+(in)\\s+",
        beginCaptures: {
          1: { name: "keyword.operator.type.modifier.ts" },
          2: { name: "storage.modifier.ts" },
          3: { name: "meta.brace.square.ts" },
          4: { name: "entity.name.type.ts" },
          5: { name: "keyword.operator.expression.in.ts" },
        },
        end: "(\\])([+-])?\\s*(\\?\\s*)?|$",
        endCaptures: {
          1: { name: "meta.brace.square.ts" },
          2: { name: "keyword.operator.type.modifier.ts" },
          3: { name: "keyword.operator.optional.ts" },
        },
        name: "meta.indexer.mappedtype.declaration.ts",
        patterns: [
          {
            captures: { 1: { name: "keyword.control.as.ts" } },
            match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+",
          },
          { include: "#type" },
        ],
      },
      "inline-tags": {
        patterns: [
          {
            captures: {
              1: { name: "punctuation.definition.bracket.square.begin.jsdoc" },
              2: { name: "punctuation.definition.bracket.square.end.jsdoc" },
            },
            match:
              "(\\[)[^\\]]+(\\])(?={@(?:link|linkcode|linkplain|tutorial))",
            name: "constant.other.description.jsdoc",
          },
          {
            begin: "({)((@)(?:link(?:code|plain)?|tutorial))\\s*",
            beginCaptures: {
              1: { name: "punctuation.definition.bracket.curly.begin.jsdoc" },
              2: { name: "storage.type.class.jsdoc" },
              3: { name: "punctuation.definition.inline.tag.jsdoc" },
            },
            end: "}|(?=\\*/)",
            endCaptures: {
              0: { name: "punctuation.definition.bracket.curly.end.jsdoc" },
            },
            name: "entity.name.type.instance.jsdoc",
            patterns: [
              {
                captures: {
                  1: { name: "variable.other.link.underline.jsdoc" },
                  2: { name: "punctuation.separator.pipe.jsdoc" },
                },
                match: "\\G((?=https?://)(?:[^|}\\s*]|\\*[/])+)(\\|)?",
              },
              {
                captures: {
                  1: { name: "variable.other.description.jsdoc" },
                  2: { name: "punctuation.separator.pipe.jsdoc" },
                },
                match: "\\G((?:[^{}@\\s|*]|\\*[^/])+)(\\|)?",
              },
            ],
          },
        ],
      },
      "instanceof-expr": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(instanceof)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
        beginCaptures: {
          1: { name: "keyword.operator.expression.instanceof.ts" },
        },
        end: "(?<=\\))|(?=[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|(===|!==|==|!=)|(([\\&\\~\\^\\|]\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s+instanceof(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))function((\\s+[_$A-Za-z][_$0-9A-Za-z]*)|(\\s*[\\(]))))",
        patterns: [{ include: "#type" }],
      },
      "interface-declaration": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(?:(abstract)\\s+)?\\b(interface)\\b(?=\\s+|/[/*])",
        beginCaptures: {
          1: { name: "keyword.control.export.ts" },
          2: { name: "storage.modifier.ts" },
          3: { name: "storage.modifier.ts" },
          4: { name: "storage.type.interface.ts" },
        },
        end: "(?<=\\})",
        name: "meta.interface.ts",
        patterns: [
          { include: "#comment" },
          { include: "#class-or-interface-heritage" },
          {
            captures: { 0: { name: "entity.name.type.interface.ts" } },
            match: "[_$A-Za-z][_$0-9A-Za-z]*",
          },
          { include: "#type-parameters" },
          { include: "#class-or-interface-body" },
        ],
      },
      jsdoctype: {
        patterns: [
          {
            begin: "\\G({)",
            beginCaptures: {
              0: { name: "entity.name.type.instance.jsdoc" },
              1: { name: "punctuation.definition.bracket.curly.begin.jsdoc" },
            },
            contentName: "entity.name.type.instance.jsdoc",
            end: "((}))\\s*|(?=\\*/)",
            endCaptures: {
              1: { name: "entity.name.type.instance.jsdoc" },
              2: { name: "punctuation.definition.bracket.curly.end.jsdoc" },
            },
            patterns: [{ include: "#brackets" }],
          },
        ],
      },
      label: {
        patterns: [
          {
            begin: "([_$A-Za-z][_$0-9A-Za-z]*)\\s*(:)(?=\\s*\\{)",
            beginCaptures: {
              1: { name: "entity.name.label.ts" },
              2: { name: "punctuation.separator.label.ts" },
            },
            end: "(?<=\\})",
            patterns: [{ include: "#decl-block" }],
          },
          {
            captures: {
              1: { name: "entity.name.label.ts" },
              2: { name: "punctuation.separator.label.ts" },
            },
            match: "([_$A-Za-z][_$0-9A-Za-z]*)\\s*(:)",
          },
        ],
      },
      literal: {
        patterns: [
          { include: "#numeric-literal" },
          { include: "#boolean-literal" },
          { include: "#null-literal" },
          { include: "#undefined-literal" },
          { include: "#numericConstant-literal" },
          { include: "#array-literal" },
          { include: "#this-literal" },
          { include: "#super-literal" },
        ],
      },
      "method-declaration": {
        patterns: [
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\s+)?(?:\\b(public|private|protected)\\s+)?(?:\\b(abstract)\\s+)?(?:\\b(async)\\s+)?\\s*\\b(constructor)\\b(?!:)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            beginCaptures: {
              1: { name: "storage.modifier.ts" },
              2: { name: "storage.modifier.ts" },
              3: { name: "storage.modifier.ts" },
              4: { name: "storage.modifier.async.ts" },
              5: { name: "storage.type.ts" },
            },
            end: "(?=\\}|;|,|$)|(?<=\\})",
            name: "meta.method.declaration.ts",
            patterns: [
              { include: "#method-declaration-name" },
              { include: "#function-body" },
            ],
          },
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\s+)?(?:\\b(public|private|protected)\\s+)?(?:\\b(abstract)\\s+)?(?:\\b(async)\\s+)?(?:(?:\\s*\\b(new)\\b(?!:)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|(?:(\\*)\\s*)?)(?=\\s*((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])",
            beginCaptures: {
              1: { name: "storage.modifier.ts" },
              2: { name: "storage.modifier.ts" },
              3: { name: "storage.modifier.ts" },
              4: { name: "storage.modifier.async.ts" },
              5: { name: "keyword.operator.new.ts" },
              6: { name: "keyword.generator.asterisk.ts" },
            },
            end: "(?=\\}|;|,|$)|(?<=\\})",
            name: "meta.method.declaration.ts",
            patterns: [
              { include: "#method-declaration-name" },
              { include: "#function-body" },
            ],
          },
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\s+)?(?:\\b(public|private|protected)\\s+)?(?:\\b(abstract)\\s+)?(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(\\*)\\s*)?(?=\\s*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))\\s*((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])",
            beginCaptures: {
              1: { name: "storage.modifier.ts" },
              2: { name: "storage.modifier.ts" },
              3: { name: "storage.modifier.ts" },
              4: { name: "storage.modifier.async.ts" },
              5: { name: "storage.type.property.ts" },
              6: { name: "keyword.generator.asterisk.ts" },
            },
            end: "(?=\\}|;|,|$)|(?<=\\})",
            name: "meta.method.declaration.ts",
            patterns: [
              { include: "#method-declaration-name" },
              { include: "#function-body" },
            ],
          },
        ],
      },
      "method-declaration-name": {
        begin:
          "(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??)\\s*[\\(\\<])",
        end: "(?=\\(|\\<)",
        patterns: [
          { include: "#string" },
          { include: "#array-literal" },
          { include: "#numeric-literal" },
          {
            match: "[_$A-Za-z][_$0-9A-Za-z]*",
            name: "meta.definition.method.ts entity.name.function.ts",
          },
          { match: "\\?", name: "keyword.operator.optional.ts" },
        ],
      },
      "namespace-declaration": {
        begin:
          "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(namespace|module)\\s+(?=[_$A-Za-z\"'`]))",
        beginCaptures: {
          1: { name: "keyword.control.export.ts" },
          2: { name: "storage.modifier.ts" },
          3: { name: "storage.type.namespace.ts" },
        },
        end: "(?<=\\})|(?=;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))",
        name: "meta.namespace.declaration.ts",
        patterns: [
          { include: "#comment" },
          { include: "#string" },
          {
            match: "([_$A-Za-z][_$0-9A-Za-z]*)",
            name: "entity.name.type.module.ts",
          },
          { include: "#punctuation-accessor" },
          { include: "#decl-block" },
        ],
      },
      "new-expr": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(new)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
        beginCaptures: { 1: { name: "keyword.operator.new.ts" } },
        end: "(?<=\\))|(?=[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))new(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))function((\\s+[_$A-Za-z][_$0-9A-Za-z]*)|(\\s*[\\(]))))",
        name: "new.expr.ts",
        patterns: [{ include: "#expression" }],
      },
      "null-literal": {
        match:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))null(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
        name: "constant.language.null.ts",
      },
      "numeric-literal": {
        patterns: [
          {
            captures: { 1: { name: "storage.type.numeric.bigint.ts" } },
            match: "\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$)",
            name: "constant.numeric.hex.ts",
          },
          {
            captures: { 1: { name: "storage.type.numeric.bigint.ts" } },
            match: "\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$)",
            name: "constant.numeric.binary.ts",
          },
          {
            captures: { 1: { name: "storage.type.numeric.bigint.ts" } },
            match: "\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$)",
            name: "constant.numeric.octal.ts",
          },
          {
            captures: {
              0: { name: "constant.numeric.decimal.ts" },
              1: { name: "meta.delimiter.decimal.period.ts" },
              2: { name: "storage.type.numeric.bigint.ts" },
              3: { name: "meta.delimiter.decimal.period.ts" },
              4: { name: "storage.type.numeric.bigint.ts" },
              5: { name: "meta.delimiter.decimal.period.ts" },
              6: { name: "storage.type.numeric.bigint.ts" },
              7: { name: "storage.type.numeric.bigint.ts" },
              8: { name: "meta.delimiter.decimal.period.ts" },
              9: { name: "storage.type.numeric.bigint.ts" },
              10: { name: "meta.delimiter.decimal.period.ts" },
              11: { name: "storage.type.numeric.bigint.ts" },
              12: { name: "meta.delimiter.decimal.period.ts" },
              13: { name: "storage.type.numeric.bigint.ts" },
              14: { name: "storage.type.numeric.bigint.ts" },
            },
            match:
              "(?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$)",
          },
        ],
      },
      "numericConstant-literal": {
        patterns: [
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))NaN(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "constant.language.nan.ts",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))Infinity(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "constant.language.infinity.ts",
          },
        ],
      },
      "object-binding-element": {
        patterns: [
          { include: "#comment" },
          {
            begin:
              "(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))",
            end: "(?=,|\\})",
            patterns: [
              { include: "#object-binding-element-propertyName" },
              { include: "#binding-element" },
            ],
          },
          { include: "#object-binding-pattern" },
          { include: "#destructuring-variable-rest" },
          { include: "#variable-initializer" },
          { include: "#punctuation-comma" },
        ],
      },
      "object-binding-element-const": {
        patterns: [
          { include: "#comment" },
          {
            begin:
              "(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))",
            end: "(?=,|\\})",
            patterns: [
              { include: "#object-binding-element-propertyName" },
              { include: "#binding-element-const" },
            ],
          },
          { include: "#object-binding-pattern-const" },
          { include: "#destructuring-variable-rest-const" },
          { include: "#variable-initializer" },
          { include: "#punctuation-comma" },
        ],
      },
      "object-binding-element-propertyName": {
        begin:
          "(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))",
        end: "(:)",
        endCaptures: { 0: { name: "punctuation.destructuring.ts" } },
        patterns: [
          { include: "#string" },
          { include: "#array-literal" },
          { include: "#numeric-literal" },
          {
            match: "([_$A-Za-z][_$0-9A-Za-z]*)",
            name: "variable.object.property.ts",
          },
        ],
      },
      "object-binding-pattern": {
        begin: "(?:(\\.\\.\\.)\\s*)?(\\{)",
        beginCaptures: {
          1: { name: "keyword.operator.rest.ts" },
          2: { name: "punctuation.definition.binding-pattern.object.ts" },
        },
        end: "\\}",
        endCaptures: {
          0: { name: "punctuation.definition.binding-pattern.object.ts" },
        },
        patterns: [{ include: "#object-binding-element" }],
      },
      "object-binding-pattern-const": {
        begin: "(?:(\\.\\.\\.)\\s*)?(\\{)",
        beginCaptures: {
          1: { name: "keyword.operator.rest.ts" },
          2: { name: "punctuation.definition.binding-pattern.object.ts" },
        },
        end: "\\}",
        endCaptures: {
          0: { name: "punctuation.definition.binding-pattern.object.ts" },
        },
        patterns: [{ include: "#object-binding-element-const" }],
      },
      "object-identifiers": {
        patterns: [
          {
            match:
              "([_$A-Za-z][_$0-9A-Za-z]*)(?=\\s*\\??\\.\\s*prototype\\b(?!\\$))",
            name: "support.class.ts",
          },
          {
            captures: {
              1: { name: "punctuation.accessor.ts" },
              2: { name: "punctuation.accessor.optional.ts" },
              3: { name: "variable.other.constant.object.property.ts" },
              4: { name: "variable.other.object.property.ts" },
            },
            match:
              "(?:(\\.)|(\\?\\.(?!\\s*[\\d])))\\s*(?:(\\#?[A-Z][_$\\dA-Z]*)|(\\#?[_$A-Za-z][_$0-9A-Za-z]*))(?=\\s*\\??\\.\\s*\\#?[_$A-Za-z][_$0-9A-Za-z]*)",
          },
          {
            captures: {
              1: { name: "variable.other.constant.object.ts" },
              2: { name: "variable.other.object.ts" },
            },
            match:
              "(?:([A-Z][_$\\dA-Z]*)|([_$A-Za-z][_$0-9A-Za-z]*))(?=\\s*\\??\\.\\s*\\#?[_$A-Za-z][_$0-9A-Za-z]*)",
          },
        ],
      },
      "object-literal": {
        begin: "\\{",
        beginCaptures: { 0: { name: "punctuation.definition.block.ts" } },
        end: "\\}",
        endCaptures: { 0: { name: "punctuation.definition.block.ts" } },
        name: "meta.objectliteral.ts",
        patterns: [{ include: "#object-member" }],
      },
      "object-literal-method-declaration": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(\\*)\\s*)?(?=\\s*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))\\s*((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])",
        beginCaptures: {
          1: { name: "storage.modifier.async.ts" },
          2: { name: "storage.type.property.ts" },
          3: { name: "keyword.generator.asterisk.ts" },
        },
        end: "(?=\\}|;|,)|(?<=\\})",
        name: "meta.method.declaration.ts",
        patterns: [
          { include: "#method-declaration-name" },
          { include: "#function-body" },
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(\\*)\\s*)?(?=\\s*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))\\s*((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])",
            beginCaptures: {
              1: { name: "storage.modifier.async.ts" },
              2: { name: "storage.type.property.ts" },
              3: { name: "keyword.generator.asterisk.ts" },
            },
            end: "(?=\\(|\\<)",
            patterns: [{ include: "#method-declaration-name" }],
          },
        ],
      },
      "object-member": {
        patterns: [
          { include: "#comment" },
          { include: "#object-literal-method-declaration" },
          {
            begin: "(?=\\[)",
            end: "(?=:)|((?<=[\\]])(?=\\s*[\\(\\<]))",
            name: "meta.object.member.ts meta.object-literal.key.ts",
            patterns: [{ include: "#comment" }, { include: "#array-literal" }],
          },
          {
            begin: "(?=[\\'\\\"\\`])",
            end: "(?=:)|((?<=[\\'\\\"\\`])(?=((\\s*[\\(\\<,}])|(\\s+(as|satisifies)\\s+))))",
            name: "meta.object.member.ts meta.object-literal.key.ts",
            patterns: [{ include: "#comment" }, { include: "#string" }],
          },
          {
            begin:
              "(?=(\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$)))",
            end: "(?=:)|(?=\\s*([\\(\\<,}])|(\\s+as|satisifies\\s+))",
            name: "meta.object.member.ts meta.object-literal.key.ts",
            patterns: [
              { include: "#comment" },
              { include: "#numeric-literal" },
            ],
          },
          {
            begin: "(?<=[\\]\\'\\\"\\`])(?=\\s*[\\(\\<])",
            end: "(?=\\}|;|,)|(?<=\\})",
            name: "meta.method.declaration.ts",
            patterns: [{ include: "#function-body" }],
          },
          {
            captures: {
              0: { name: "meta.object-literal.key.ts" },
              1: { name: "constant.numeric.decimal.ts" },
            },
            match:
              "(?![_$A-Za-z])([\\d]+)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:)",
            name: "meta.object.member.ts",
          },
          {
            captures: {
              0: { name: "meta.object-literal.key.ts" },
              1: { name: "entity.name.function.ts" },
            },
            match:
              "(?:([_$A-Za-z][_$0-9A-Za-z]*)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:(\\s*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/)*\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))",
            name: "meta.object.member.ts",
          },
          {
            captures: { 0: { name: "meta.object-literal.key.ts" } },
            match:
              "(?:[_$A-Za-z][_$0-9A-Za-z]*)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:)",
            name: "meta.object.member.ts",
          },
          {
            begin: "\\.\\.\\.",
            beginCaptures: { 0: { name: "keyword.operator.spread.ts" } },
            end: "(?=,|\\})",
            name: "meta.object.member.ts",
            patterns: [{ include: "#expression" }],
          },
          {
            captures: { 1: { name: "variable.other.readwrite.ts" } },
            match: "([_$A-Za-z][_$0-9A-Za-z]*)\\s*(?=,|\\}|$|\\/\\/|\\/\\*)",
            name: "meta.object.member.ts",
          },
          {
            captures: {
              1: { name: "keyword.control.as.ts" },
              2: { name: "storage.modifier.ts" },
            },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+(const)(?=\\s*([,}]|$))",
            name: "meta.object.member.ts",
          },
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(as)|(satisfies))\\s+",
            beginCaptures: {
              1: { name: "keyword.control.as.ts" },
              2: { name: "keyword.control.satisfies.ts" },
            },
            end: "(?=[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|^|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(as|satisifies)\\s+))",
            name: "meta.object.member.ts",
            patterns: [{ include: "#type" }],
          },
          {
            begin: "(?=[_$A-Za-z][_$0-9A-Za-z]*\\s*=)",
            end: "(?=,|\\}|$|\\/\\/|\\/\\*)",
            name: "meta.object.member.ts",
            patterns: [{ include: "#expression" }],
          },
          {
            begin: ":",
            beginCaptures: {
              0: {
                name: "meta.object-literal.key.ts punctuation.separator.key-value.ts",
              },
            },
            end: "(?=,|\\})",
            name: "meta.object.member.ts",
            patterns: [
              {
                begin:
                  "(?<=:)\\s*(async)?(?=\\s*(<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)\\(\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))",
                beginCaptures: { 1: { name: "storage.modifier.async.ts" } },
                end: "(?<=\\))",
                patterns: [
                  { include: "#type-parameters" },
                  {
                    begin: "\\(",
                    beginCaptures: { 0: { name: "meta.brace.round.ts" } },
                    end: "\\)",
                    endCaptures: { 0: { name: "meta.brace.round.ts" } },
                    patterns: [
                      { include: "#expression-inside-possibly-arrow-parens" },
                    ],
                  },
                ],
              },
              {
                begin:
                  "(?<=:)\\s*(async)?\\s*(\\()(?=\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))",
                beginCaptures: {
                  1: { name: "storage.modifier.async.ts" },
                  2: { name: "meta.brace.round.ts" },
                },
                end: "\\)",
                endCaptures: { 0: { name: "meta.brace.round.ts" } },
                patterns: [
                  { include: "#expression-inside-possibly-arrow-parens" },
                ],
              },
              {
                begin: "(?<=:)\\s*(async)?\\s*(?=\\<\\s*$)",
                beginCaptures: { 1: { name: "storage.modifier.async.ts" } },
                end: "(?<=\\>)",
                patterns: [{ include: "#type-parameters" }],
              },
              {
                begin:
                  "(?<=\\>)\\s*(\\()(?=\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))",
                beginCaptures: { 1: { name: "meta.brace.round.ts" } },
                end: "\\)",
                endCaptures: { 0: { name: "meta.brace.round.ts" } },
                patterns: [
                  { include: "#expression-inside-possibly-arrow-parens" },
                ],
              },
              { include: "#possibly-arrow-return-type" },
              { include: "#expression" },
            ],
          },
          { include: "#punctuation-comma" },
          { include: "#decl-block" },
        ],
      },
      "parameter-array-binding-pattern": {
        begin: "(?:(\\.\\.\\.)\\s*)?(\\[)",
        beginCaptures: {
          1: { name: "keyword.operator.rest.ts" },
          2: { name: "punctuation.definition.binding-pattern.array.ts" },
        },
        end: "\\]",
        endCaptures: {
          0: { name: "punctuation.definition.binding-pattern.array.ts" },
        },
        patterns: [
          { include: "#parameter-binding-element" },
          { include: "#punctuation-comma" },
        ],
      },
      "parameter-binding-element": {
        patterns: [
          { include: "#comment" },
          { include: "#string" },
          { include: "#numeric-literal" },
          { include: "#regex" },
          { include: "#parameter-object-binding-pattern" },
          { include: "#parameter-array-binding-pattern" },
          { include: "#destructuring-parameter-rest" },
          { include: "#variable-initializer" },
        ],
      },
      "parameter-name": {
        patterns: [
          {
            captures: { 1: { name: "storage.modifier.ts" } },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|protected|private|readonly)\\s+(?=(override|public|protected|private|readonly)\\s+)",
          },
          {
            captures: {
              1: { name: "storage.modifier.ts" },
              2: { name: "keyword.operator.rest.ts" },
              3: { name: "entity.name.function.ts variable.language.this.ts" },
              4: { name: "entity.name.function.ts" },
              5: { name: "keyword.operator.optional.ts" },
            },
            match:
              "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$A-Za-z][_$0-9A-Za-z]*))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)(?=\\s*(=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))|(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$0-9A-Za-z]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))))|(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))",
          },
          {
            captures: {
              1: { name: "storage.modifier.ts" },
              2: { name: "keyword.operator.rest.ts" },
              3: { name: "variable.parameter.ts variable.language.this.ts" },
              4: { name: "variable.parameter.ts" },
              5: { name: "keyword.operator.optional.ts" },
            },
            match:
              "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$A-Za-z][_$0-9A-Za-z]*))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)",
          },
        ],
      },
      "parameter-object-binding-element": {
        patterns: [
          { include: "#comment" },
          {
            begin:
              "(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))",
            end: "(?=,|\\})",
            patterns: [
              { include: "#object-binding-element-propertyName" },
              { include: "#parameter-binding-element" },
              { include: "#paren-expression" },
            ],
          },
          { include: "#parameter-object-binding-pattern" },
          { include: "#destructuring-parameter-rest" },
          { include: "#variable-initializer" },
          { include: "#punctuation-comma" },
        ],
      },
      "parameter-object-binding-pattern": {
        begin: "(?:(\\.\\.\\.)\\s*)?(\\{)",
        beginCaptures: {
          1: { name: "keyword.operator.rest.ts" },
          2: { name: "punctuation.definition.binding-pattern.object.ts" },
        },
        end: "\\}",
        endCaptures: {
          0: { name: "punctuation.definition.binding-pattern.object.ts" },
        },
        patterns: [{ include: "#parameter-object-binding-element" }],
      },
      "parameter-type-annotation": {
        patterns: [
          {
            begin: "(:)",
            beginCaptures: {
              1: { name: "keyword.operator.type.annotation.ts" },
            },
            end: "(?=[,)])|(?==[^>])",
            name: "meta.type.annotation.ts",
            patterns: [{ include: "#type" }],
          },
        ],
      },
      "paren-expression": {
        begin: "\\(",
        beginCaptures: { 0: { name: "meta.brace.round.ts" } },
        end: "\\)",
        endCaptures: { 0: { name: "meta.brace.round.ts" } },
        patterns: [{ include: "#expression" }],
      },
      "paren-expression-possibly-arrow": {
        patterns: [
          {
            begin:
              "(?<=[(=,])\\s*(async)?(?=\\s*((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?\\(\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))",
            beginCaptures: { 1: { name: "storage.modifier.async.ts" } },
            end: "(?<=\\))",
            patterns: [
              {
                include: "#paren-expression-possibly-arrow-with-typeparameters",
              },
            ],
          },
          {
            begin:
              "(?<=[(=,]|=>|^return|[^\\._$0-9A-Za-z]return)\\s*(async)?(?=\\s*((((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?\\()|(<)|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)))\\s*$)",
            beginCaptures: { 1: { name: "storage.modifier.async.ts" } },
            end: "(?<=\\))",
            patterns: [
              {
                include: "#paren-expression-possibly-arrow-with-typeparameters",
              },
            ],
          },
          { include: "#possibly-arrow-return-type" },
        ],
      },
      "paren-expression-possibly-arrow-with-typeparameters": {
        patterns: [
          { include: "#type-parameters" },
          {
            begin: "\\(",
            beginCaptures: { 0: { name: "meta.brace.round.ts" } },
            end: "\\)",
            endCaptures: { 0: { name: "meta.brace.round.ts" } },
            patterns: [{ include: "#expression-inside-possibly-arrow-parens" }],
          },
        ],
      },
      "possibly-arrow-return-type": {
        begin:
          "(?<=\\)|^)\\s*(:)(?=\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*=>)",
        beginCaptures: {
          1: {
            name: "meta.arrow.ts meta.return.type.arrow.ts keyword.operator.type.annotation.ts",
          },
        },
        contentName: "meta.arrow.ts meta.return.type.arrow.ts",
        end: "(?==>|\\{|(^\\s*(export|function|class|interface|let|var|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|const|import|enum|namespace|module|type|abstract|declare)\\s+))",
        patterns: [{ include: "#arrow-return-type-body" }],
      },
      "property-accessor": {
        match:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(accessor|get|set)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
        name: "storage.type.property.ts",
      },
      "punctuation-accessor": {
        captures: {
          1: { name: "punctuation.accessor.ts" },
          2: { name: "punctuation.accessor.optional.ts" },
        },
        match: "(?:(\\.)|(\\?\\.(?!\\s*[\\d])))",
      },
      "punctuation-comma": {
        match: ",",
        name: "punctuation.separator.comma.ts",
      },
      "punctuation-semicolon": {
        match: ";",
        name: "punctuation.terminator.statement.ts",
      },
      "qstring-double": {
        begin: '"',
        beginCaptures: {
          0: { name: "punctuation.definition.string.begin.ts" },
        },
        end: '(")|((?:[^\\\\\\n])$)',
        endCaptures: {
          1: { name: "punctuation.definition.string.end.ts" },
          2: { name: "invalid.illegal.newline.ts" },
        },
        name: "string.quoted.double.ts",
        patterns: [{ include: "#string-character-escape" }],
      },
      "qstring-single": {
        begin: "'",
        beginCaptures: {
          0: { name: "punctuation.definition.string.begin.ts" },
        },
        end: "(\\')|((?:[^\\\\\\n])$)",
        endCaptures: {
          1: { name: "punctuation.definition.string.end.ts" },
          2: { name: "invalid.illegal.newline.ts" },
        },
        name: "string.quoted.single.ts",
        patterns: [{ include: "#string-character-escape" }],
      },
      regex: {
        patterns: [
          {
            begin:
              "(?<!\\+\\+|--|})(?<=[=(:,\\[?+!]|^return|[^\\._$0-9A-Za-z]return|^case|[^\\._$0-9A-Za-z]case|=>|&&|\\|\\||\\*\\/)\\s*(\\/)(?![\\/*])(?=(?:[^\\/\\\\\\[\\()]|\\\\.|\\[([^\\]\\\\]|\\\\.)+\\]|\\(([^\\)\\\\]|\\\\.)+\\))+\\/([dgimsuy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))",
            beginCaptures: {
              1: { name: "punctuation.definition.string.begin.ts" },
            },
            end: "(/)([dgimsuy]*)",
            endCaptures: {
              1: { name: "punctuation.definition.string.end.ts" },
              2: { name: "keyword.other.ts" },
            },
            name: "string.regexp.ts",
            patterns: [{ include: "#regexp" }],
          },
          {
            begin:
              "((?<![_$0-9A-Za-z)\\]]|\\+\\+|--|}|\\*\\/)|((?<=^return|[^\\._$0-9A-Za-z]return|^case|[^\\._$0-9A-Za-z]case))\\s*)\\/(?![\\/*])(?=(?:[^\\/\\\\\\[]|\\\\.|\\[([^\\]\\\\]|\\\\.)*\\])+\\/([dgimsuy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))",
            beginCaptures: {
              0: { name: "punctuation.definition.string.begin.ts" },
            },
            end: "(/)([dgimsuy]*)",
            endCaptures: {
              1: { name: "punctuation.definition.string.end.ts" },
              2: { name: "keyword.other.ts" },
            },
            name: "string.regexp.ts",
            patterns: [{ include: "#regexp" }],
          },
        ],
      },
      "regex-character-class": {
        patterns: [
          {
            match: "\\\\[wWsSdDtrnvf]|\\.",
            name: "constant.other.character-class.regexp",
          },
          {
            match: "\\\\([0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4})",
            name: "constant.character.numeric.regexp",
          },
          { match: "\\\\c[A-Z]", name: "constant.character.control.regexp" },
          {
            match: "\\\\.",
            name: "constant.character.escape.backslash.regexp",
          },
        ],
      },
      regexp: {
        patterns: [
          { match: "\\\\[bB]|\\^|\\$", name: "keyword.control.anchor.regexp" },
          {
            captures: {
              0: { name: "keyword.other.back-reference.regexp" },
              1: { name: "variable.other.regexp" },
            },
            match: "\\\\[1-9]\\d*|\\\\k<([a-zA-Z_$][\\w$]*)>",
          },
          {
            match: "[?+*]|\\{(\\d+,\\d+|\\d+,|,\\d+|\\d+)\\}\\??",
            name: "keyword.operator.quantifier.regexp",
          },
          { match: "\\|", name: "keyword.operator.or.regexp" },
          {
            begin: "(\\()((\\?=)|(\\?!)|(\\?<=)|(\\?<!))",
            beginCaptures: {
              1: { name: "punctuation.definition.group.regexp" },
              2: { name: "punctuation.definition.group.assertion.regexp" },
              3: { name: "meta.assertion.look-ahead.regexp" },
              4: { name: "meta.assertion.negative-look-ahead.regexp" },
              5: { name: "meta.assertion.look-behind.regexp" },
              6: { name: "meta.assertion.negative-look-behind.regexp" },
            },
            end: "(\\))",
            endCaptures: { 1: { name: "punctuation.definition.group.regexp" } },
            name: "meta.group.assertion.regexp",
            patterns: [{ include: "#regexp" }],
          },
          {
            begin: "\\((?:(\\?:)|(?:\\?<([a-zA-Z_$][\\w$]*)>))?",
            beginCaptures: {
              0: { name: "punctuation.definition.group.regexp" },
              1: { name: "punctuation.definition.group.no-capture.regexp" },
              2: { name: "variable.other.regexp" },
            },
            end: "\\)",
            endCaptures: { 0: { name: "punctuation.definition.group.regexp" } },
            name: "meta.group.regexp",
            patterns: [{ include: "#regexp" }],
          },
          {
            begin: "(\\[)(\\^)?",
            beginCaptures: {
              1: { name: "punctuation.definition.character-class.regexp" },
              2: { name: "keyword.operator.negation.regexp" },
            },
            end: "(\\])",
            endCaptures: {
              1: { name: "punctuation.definition.character-class.regexp" },
            },
            name: "constant.other.character-class.set.regexp",
            patterns: [
              {
                captures: {
                  1: { name: "constant.character.numeric.regexp" },
                  2: { name: "constant.character.control.regexp" },
                  3: { name: "constant.character.escape.backslash.regexp" },
                  4: { name: "constant.character.numeric.regexp" },
                  5: { name: "constant.character.control.regexp" },
                  6: { name: "constant.character.escape.backslash.regexp" },
                },
                match:
                  "(?:.|(\\\\(?:[0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}))|(\\\\c[A-Z])|(\\\\.))\\-(?:[^\\]\\\\]|(\\\\(?:[0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}))|(\\\\c[A-Z])|(\\\\.))",
                name: "constant.other.character-class.range.regexp",
              },
              { include: "#regex-character-class" },
            ],
          },
          { include: "#regex-character-class" },
        ],
      },
      "return-type": {
        patterns: [
          {
            begin: "(?<=\\))\\s*(:)(?=\\s*\\S)",
            beginCaptures: {
              1: { name: "keyword.operator.type.annotation.ts" },
            },
            end: "(?<![:|&])(?=$|^|[{};,]|//)",
            name: "meta.return.type.ts",
            patterns: [{ include: "#return-type-core" }],
          },
          {
            begin: "(?<=\\))\\s*(:)",
            beginCaptures: {
              1: { name: "keyword.operator.type.annotation.ts" },
            },
            end: "(?<![:|&])((?=[{};,]|//|^\\s*$)|((?<=\\S)(?=\\s*$)))",
            name: "meta.return.type.ts",
            patterns: [{ include: "#return-type-core" }],
          },
        ],
      },
      "return-type-core": {
        patterns: [
          { include: "#comment" },
          {
            begin: "(?<=[:|&])(?=\\s*\\{)",
            end: "(?<=\\})",
            patterns: [{ include: "#type-object" }],
          },
          { include: "#type-predicate-operator" },
          { include: "#type" },
        ],
      },
      shebang: {
        captures: { 1: { name: "punctuation.definition.comment.ts" } },
        match: "\\A(#!).*(?=$)",
        name: "comment.line.shebang.ts",
      },
      "single-line-comment-consuming-line-ending": {
        begin: "(^[ \\t]+)?((//)(?:\\s*((@)internal)(?=\\s|$))?)",
        beginCaptures: {
          1: { name: "punctuation.whitespace.comment.leading.ts" },
          2: { name: "comment.line.double-slash.ts" },
          3: { name: "punctuation.definition.comment.ts" },
          4: { name: "storage.type.internaldeclaration.ts" },
          5: { name: "punctuation.decorator.internaldeclaration.ts" },
        },
        contentName: "comment.line.double-slash.ts",
        end: "(?=^)",
      },
      statements: {
        patterns: [
          { include: "#declaration" },
          { include: "#control-statement" },
          { include: "#after-operator-block-as-object-literal" },
          { include: "#decl-block" },
          { include: "#label" },
          { include: "#expression" },
          { include: "#punctuation-semicolon" },
          { include: "#string" },
          { include: "#comment" },
        ],
      },
      string: {
        patterns: [
          { include: "#qstring-single" },
          { include: "#qstring-double" },
          { include: "#template" },
        ],
      },
      "string-character-escape": {
        match:
          "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|u\\{[0-9A-Fa-f]+\\}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.|$)",
        name: "constant.character.escape.ts",
      },
      "super-literal": {
        match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))super\\b(?!\\$)",
        name: "variable.language.super.ts",
      },
      "support-function-call-identifiers": {
        patterns: [
          { include: "#literal" },
          { include: "#support-objects" },
          { include: "#object-identifiers" },
          { include: "#punctuation-accessor" },
          {
            match:
              "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))import(?=\\s*[\\(]\\s*[\\\"\\'\\`]))",
            name: "keyword.operator.expression.import.ts",
          },
        ],
      },
      "support-objects": {
        patterns: [
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(arguments)\\b(?!\\$)",
            name: "variable.language.arguments.ts",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(Promise)\\b(?!\\$)",
            name: "support.class.promise.ts",
          },
          {
            captures: {
              1: { name: "keyword.control.import.ts" },
              2: { name: "punctuation.accessor.ts" },
              3: { name: "punctuation.accessor.optional.ts" },
              4: { name: "support.variable.property.importmeta.ts" },
            },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(import)\\s*(?:(\\.)|(\\?\\.(?!\\s*[\\d])))\\s*(meta)\\b(?!\\$)",
          },
          {
            captures: {
              1: { name: "keyword.operator.new.ts" },
              2: { name: "punctuation.accessor.ts" },
              3: { name: "punctuation.accessor.optional.ts" },
              4: { name: "support.variable.property.target.ts" },
            },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(new)\\s*(?:(\\.)|(\\?\\.(?!\\s*[\\d])))\\s*(target)\\b(?!\\$)",
          },
          {
            captures: {
              1: { name: "punctuation.accessor.ts" },
              2: { name: "punctuation.accessor.optional.ts" },
              3: { name: "support.variable.property.ts" },
              4: { name: "support.constant.ts" },
            },
            match:
              "(?:(\\.)|(\\?\\.(?!\\s*[\\d])))\\s*(?:(?:(constructor|length|prototype|__proto__)\\b(?!\\$|\\s*(<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\())|(?:(EPSILON|MAX_SAFE_INTEGER|MAX_VALUE|MIN_SAFE_INTEGER|MIN_VALUE|NEGATIVE_INFINITY|POSITIVE_INFINITY)\\b(?!\\$)))",
          },
          {
            captures: {
              1: { name: "support.type.object.module.ts" },
              2: { name: "support.type.object.module.ts" },
              3: { name: "punctuation.accessor.ts" },
              4: { name: "punctuation.accessor.optional.ts" },
              5: { name: "support.type.object.module.ts" },
            },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(exports)|(module)(?:(?:(\\.)|(\\?\\.(?!\\s*[\\d])))(exports|id|filename|loaded|parent|children))?)\\b(?!\\$)",
          },
        ],
      },
      "switch-statement": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?=\\bswitch\\s*\\()",
        end: "\\}",
        endCaptures: { 0: { name: "punctuation.definition.block.ts" } },
        name: "switch-statement.expr.ts",
        patterns: [
          { include: "#comment" },
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(switch)\\s*(\\()",
            beginCaptures: {
              1: { name: "keyword.control.switch.ts" },
              2: { name: "meta.brace.round.ts" },
            },
            end: "\\)",
            endCaptures: { 0: { name: "meta.brace.round.ts" } },
            name: "switch-expression.expr.ts",
            patterns: [{ include: "#expression" }],
          },
          {
            begin: "\\{",
            beginCaptures: { 0: { name: "punctuation.definition.block.ts" } },
            end: "(?=\\})",
            name: "switch-block.expr.ts",
            patterns: [
              {
                begin:
                  "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(case|default(?=:))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
                beginCaptures: { 1: { name: "keyword.control.switch.ts" } },
                end: "(?=:)",
                name: "case-clause.expr.ts",
                patterns: [{ include: "#expression" }],
              },
              {
                begin: "(:)\\s*(\\{)",
                beginCaptures: {
                  1: {
                    name: "case-clause.expr.ts punctuation.definition.section.case-statement.ts",
                  },
                  2: { name: "meta.block.ts punctuation.definition.block.ts" },
                },
                contentName: "meta.block.ts",
                end: "\\}",
                endCaptures: {
                  0: { name: "meta.block.ts punctuation.definition.block.ts" },
                },
                patterns: [{ include: "#statements" }],
              },
              {
                captures: {
                  0: {
                    name: "case-clause.expr.ts punctuation.definition.section.case-statement.ts",
                  },
                },
                match: "(:)",
              },
              { include: "#statements" },
            ],
          },
        ],
      },
      template: {
        patterns: [
          { include: "#template-call" },
          {
            begin: "([_$A-Za-z][_$0-9A-Za-z]*)?(`)",
            beginCaptures: {
              1: { name: "entity.name.function.tagged-template.ts" },
              2: {
                name: "string.template.ts punctuation.definition.string.template.begin.ts",
              },
            },
            contentName: "string.template.ts",
            end: "`",
            endCaptures: {
              0: {
                name: "string.template.ts punctuation.definition.string.template.end.ts",
              },
            },
            patterns: [
              { include: "#template-substitution-element" },
              { include: "#string-character-escape" },
            ],
          },
        ],
      },
      "template-call": {
        patterns: [
          {
            begin:
              "(?=(([_$A-Za-z][_$0-9A-Za-z]*\\s*\\??\\.\\s*)*|(\\??\\.\\s*)?)([_$A-Za-z][_$0-9A-Za-z]*)(<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?`)",
            end: "(?=`)",
            patterns: [
              {
                begin:
                  "(?=(([_$A-Za-z][_$0-9A-Za-z]*\\s*\\??\\.\\s*)*|(\\??\\.\\s*)?)([_$A-Za-z][_$0-9A-Za-z]*))",
                end: "(?=(<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?`)",
                patterns: [
                  { include: "#support-function-call-identifiers" },
                  {
                    match: "([_$A-Za-z][_$0-9A-Za-z]*)",
                    name: "entity.name.function.tagged-template.ts",
                  },
                ],
              },
              { include: "#type-arguments" },
            ],
          },
          {
            begin:
              "([_$A-Za-z][_$0-9A-Za-z]*)?\\s*(?=(<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)`)",
            beginCaptures: {
              1: { name: "entity.name.function.tagged-template.ts" },
            },
            end: "(?=`)",
            patterns: [{ include: "#type-arguments" }],
          },
        ],
      },
      "template-substitution-element": {
        begin: "\\$\\{",
        beginCaptures: {
          0: { name: "punctuation.definition.template-expression.begin.ts" },
        },
        contentName: "meta.embedded.line.ts",
        end: "\\}",
        endCaptures: {
          0: { name: "punctuation.definition.template-expression.end.ts" },
        },
        name: "meta.template.expression.ts",
        patterns: [{ include: "#expression" }],
      },
      "template-type": {
        patterns: [
          { include: "#template-call" },
          {
            begin: "([_$A-Za-z][_$0-9A-Za-z]*)?(`)",
            beginCaptures: {
              1: { name: "entity.name.function.tagged-template.ts" },
              2: {
                name: "string.template.ts punctuation.definition.string.template.begin.ts",
              },
            },
            contentName: "string.template.ts",
            end: "`",
            endCaptures: {
              0: {
                name: "string.template.ts punctuation.definition.string.template.end.ts",
              },
            },
            patterns: [
              { include: "#template-type-substitution-element" },
              { include: "#string-character-escape" },
            ],
          },
        ],
      },
      "template-type-substitution-element": {
        begin: "\\$\\{",
        beginCaptures: {
          0: { name: "punctuation.definition.template-expression.begin.ts" },
        },
        contentName: "meta.embedded.line.ts",
        end: "\\}",
        endCaptures: {
          0: { name: "punctuation.definition.template-expression.end.ts" },
        },
        name: "meta.template.expression.ts",
        patterns: [{ include: "#type" }],
      },
      "ternary-expression": {
        begin: "(?!\\?\\.\\s*[^\\d])(\\?)(?!\\?)",
        beginCaptures: { 1: { name: "keyword.operator.ternary.ts" } },
        end: "\\s*(:)",
        endCaptures: { 1: { name: "keyword.operator.ternary.ts" } },
        patterns: [{ include: "#expression" }],
      },
      "this-literal": {
        match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))this\\b(?!\\$)",
        name: "variable.language.this.ts",
      },
      type: {
        patterns: [
          { include: "#comment" },
          { include: "#type-string" },
          { include: "#numeric-literal" },
          { include: "#type-primitive" },
          { include: "#type-builtin-literals" },
          { include: "#type-parameters" },
          { include: "#type-tuple" },
          { include: "#type-object" },
          { include: "#type-operators" },
          { include: "#type-conditional" },
          { include: "#type-fn-type-parameters" },
          { include: "#type-paren-or-function-parameters" },
          { include: "#type-function-return-type" },
          {
            captures: { 1: { name: "storage.modifier.ts" } },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(readonly)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))\\s*",
          },
          { include: "#type-name" },
        ],
      },
      "type-alias-declaration": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(type)\\b\\s+([_$A-Za-z][_$0-9A-Za-z]*)\\s*",
        beginCaptures: {
          1: { name: "keyword.control.export.ts" },
          2: { name: "storage.modifier.ts" },
          3: { name: "storage.type.type.ts" },
          4: { name: "entity.name.type.alias.ts" },
        },
        end: "(?=\\}|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))",
        name: "meta.type.declaration.ts",
        patterns: [
          { include: "#comment" },
          { include: "#type-parameters" },
          {
            begin:
              "(=)\\s*(intrinsic)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            beginCaptures: {
              1: { name: "keyword.operator.assignment.ts" },
              2: { name: "keyword.control.intrinsic.ts" },
            },
            end: "(?=\\}|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))",
            patterns: [{ include: "#type" }],
          },
          {
            begin: "(=)\\s*",
            beginCaptures: { 1: { name: "keyword.operator.assignment.ts" } },
            end: "(?=\\}|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))",
            patterns: [{ include: "#type" }],
          },
        ],
      },
      "type-annotation": {
        patterns: [
          {
            begin: "(:)(?=\\s*\\S)",
            beginCaptures: {
              1: { name: "keyword.operator.type.annotation.ts" },
            },
            end: "(?<![:|&])(?!\\s*[|&]\\s+)((?=^|[,);\\}\\]]|//)|(?==[^>])|((?<=[\\}>\\]\\)]|[_$A-Za-z])\\s*(?=\\{)))",
            name: "meta.type.annotation.ts",
            patterns: [{ include: "#type" }],
          },
          {
            begin: "(:)",
            beginCaptures: {
              1: { name: "keyword.operator.type.annotation.ts" },
            },
            end: "(?<![:|&])((?=[,);\\}\\]]|\\/\\/)|(?==[^>])|(?=^\\s*$)|((?<=[\\}>\\]\\)]|[_$A-Za-z])\\s*(?=\\{)))",
            name: "meta.type.annotation.ts",
            patterns: [{ include: "#type" }],
          },
        ],
      },
      "type-arguments": {
        begin: "\\<",
        beginCaptures: {
          0: { name: "punctuation.definition.typeparameters.begin.ts" },
        },
        end: "\\>",
        endCaptures: {
          0: { name: "punctuation.definition.typeparameters.end.ts" },
        },
        name: "meta.type.parameters.ts",
        patterns: [{ include: "#type-arguments-body" }],
      },
      "type-arguments-body": {
        patterns: [
          {
            captures: { 0: { name: "keyword.operator.type.ts" } },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(_)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
          },
          { include: "#type" },
          { include: "#punctuation-comma" },
        ],
      },
      "type-builtin-literals": {
        match:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(this|true|false|undefined|null|object)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
        name: "support.type.builtin.ts",
      },
      "type-conditional": {
        patterns: [
          {
            begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends)\\s+",
            beginCaptures: { 1: { name: "storage.modifier.ts" } },
            end: "(?<=:)",
            patterns: [
              {
                begin: "\\?",
                beginCaptures: { 0: { name: "keyword.operator.ternary.ts" } },
                end: ":",
                endCaptures: { 0: { name: "keyword.operator.ternary.ts" } },
                patterns: [{ include: "#type" }],
              },
              { include: "#type" },
            ],
          },
        ],
      },
      "type-fn-type-parameters": {
        patterns: [
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(abstract)\\s+)?(new)\\b(?=\\s*\\<)",
            beginCaptures: {
              1: { name: "meta.type.constructor.ts storage.modifier.ts" },
              2: { name: "meta.type.constructor.ts keyword.control.new.ts" },
            },
            end: "(?<=>)",
            patterns: [
              { include: "#comment" },
              { include: "#type-parameters" },
            ],
          },
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(abstract)\\s+)?(new)\\b\\s*(?=\\()",
            beginCaptures: {
              1: { name: "storage.modifier.ts" },
              2: { name: "keyword.control.new.ts" },
            },
            end: "(?<=\\))",
            name: "meta.type.constructor.ts",
            patterns: [{ include: "#function-parameters" }],
          },
          {
            begin:
              "((?=[(]\\s*(([)])|(\\.\\.\\.)|([_$0-9A-Za-z]+\\s*(([:,?=])|([)]\\s*=>))))))",
            end: "(?<=\\))",
            name: "meta.type.function.ts",
            patterns: [{ include: "#function-parameters" }],
          },
        ],
      },
      "type-function-return-type": {
        patterns: [
          {
            begin: "(=>)(?=\\s*\\S)",
            beginCaptures: { 1: { name: "storage.type.function.arrow.ts" } },
            end: "(?<!=>)(?<![|&])(?=[,\\]\\)\\{\\}=;>:\\?]|//|$)",
            name: "meta.type.function.return.ts",
            patterns: [{ include: "#type-function-return-type-core" }],
          },
          {
            begin: "=>",
            beginCaptures: { 0: { name: "storage.type.function.arrow.ts" } },
            end: "(?<!=>)(?<![|&])((?=[,\\]\\)\\{\\}=;:\\?>]|//|^\\s*$)|((?<=\\S)(?=\\s*$)))",
            name: "meta.type.function.return.ts",
            patterns: [{ include: "#type-function-return-type-core" }],
          },
        ],
      },
      "type-function-return-type-core": {
        patterns: [
          { include: "#comment" },
          {
            begin: "(?<==>)(?=\\s*\\{)",
            end: "(?<=\\})",
            patterns: [{ include: "#type-object" }],
          },
          { include: "#type-predicate-operator" },
          { include: "#type" },
        ],
      },
      "type-infer": {
        patterns: [
          {
            captures: {
              1: { name: "keyword.operator.expression.infer.ts" },
              2: { name: "entity.name.type.ts" },
              3: { name: "keyword.operator.expression.extends.ts" },
            },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(infer)\\s+([_$A-Za-z][_$0-9A-Za-z]*)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))(?:\\s+(extends)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))?",
            name: "meta.type.infer.ts",
          },
        ],
      },
      "type-name": {
        patterns: [
          {
            begin:
              "([_$A-Za-z][_$0-9A-Za-z]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[\\d])))\\s*(<)",
            captures: {
              1: { name: "entity.name.type.module.ts" },
              2: { name: "punctuation.accessor.ts" },
              3: { name: "punctuation.accessor.optional.ts" },
              4: {
                name: "meta.type.parameters.ts punctuation.definition.typeparameters.begin.ts",
              },
            },
            contentName: "meta.type.parameters.ts",
            end: "(>)",
            endCaptures: {
              1: {
                name: "meta.type.parameters.ts punctuation.definition.typeparameters.end.ts",
              },
            },
            patterns: [{ include: "#type-arguments-body" }],
          },
          {
            begin: "([_$A-Za-z][_$0-9A-Za-z]*)\\s*(<)",
            beginCaptures: {
              1: { name: "entity.name.type.ts" },
              2: {
                name: "meta.type.parameters.ts punctuation.definition.typeparameters.begin.ts",
              },
            },
            contentName: "meta.type.parameters.ts",
            end: "(>)",
            endCaptures: {
              1: {
                name: "meta.type.parameters.ts punctuation.definition.typeparameters.end.ts",
              },
            },
            patterns: [{ include: "#type-arguments-body" }],
          },
          {
            captures: {
              1: { name: "entity.name.type.module.ts" },
              2: { name: "punctuation.accessor.ts" },
              3: { name: "punctuation.accessor.optional.ts" },
            },
            match:
              "([_$A-Za-z][_$0-9A-Za-z]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[\\d])))",
          },
          { match: "[_$A-Za-z][_$0-9A-Za-z]*", name: "entity.name.type.ts" },
        ],
      },
      "type-object": {
        begin: "\\{",
        beginCaptures: { 0: { name: "punctuation.definition.block.ts" } },
        end: "\\}",
        endCaptures: { 0: { name: "punctuation.definition.block.ts" } },
        name: "meta.object.type.ts",
        patterns: [
          { include: "#comment" },
          { include: "#method-declaration" },
          { include: "#indexer-declaration" },
          { include: "#indexer-mapped-type-declaration" },
          { include: "#field-declaration" },
          { include: "#type-annotation" },
          {
            begin: "\\.\\.\\.",
            beginCaptures: { 0: { name: "keyword.operator.spread.ts" } },
            end: "(?=\\}|;|,|$)|(?<=\\})",
            patterns: [{ include: "#type" }],
          },
          { include: "#punctuation-comma" },
          { include: "#punctuation-semicolon" },
          { include: "#type" },
        ],
      },
      "type-operators": {
        patterns: [
          { include: "#typeof-operator" },
          { include: "#type-infer" },
          {
            begin: "([&|])(?=\\s*\\{)",
            beginCaptures: { 0: { name: "keyword.operator.type.ts" } },
            end: "(?<=\\})",
            patterns: [{ include: "#type-object" }],
          },
          {
            begin: "[&|]",
            beginCaptures: { 0: { name: "keyword.operator.type.ts" } },
            end: "(?=\\S)",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))keyof(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.operator.expression.keyof.ts",
          },
          { match: "(\\?|\\:)", name: "keyword.operator.ternary.ts" },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))import(?=\\s*\\()",
            name: "keyword.operator.expression.import.ts",
          },
        ],
      },
      "type-parameters": {
        begin: "(<)",
        beginCaptures: {
          1: { name: "punctuation.definition.typeparameters.begin.ts" },
        },
        end: "(>)",
        endCaptures: {
          1: { name: "punctuation.definition.typeparameters.end.ts" },
        },
        name: "meta.type.parameters.ts",
        patterns: [
          { include: "#comment" },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends|in|out|const)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "storage.modifier.ts",
          },
          { include: "#type" },
          { include: "#punctuation-comma" },
          { match: "(=)(?!>)", name: "keyword.operator.assignment.ts" },
        ],
      },
      "type-paren-or-function-parameters": {
        begin: "\\(",
        beginCaptures: { 0: { name: "meta.brace.round.ts" } },
        end: "\\)",
        endCaptures: { 0: { name: "meta.brace.round.ts" } },
        name: "meta.type.paren.cover.ts",
        patterns: [
          {
            captures: {
              1: { name: "storage.modifier.ts" },
              2: { name: "keyword.operator.rest.ts" },
              3: { name: "entity.name.function.ts variable.language.this.ts" },
              4: { name: "entity.name.function.ts" },
              5: { name: "keyword.operator.optional.ts" },
            },
            match:
              "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$A-Za-z][_$0-9A-Za-z]*))\\s*(\\??)(?=\\s*(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$0-9A-Za-z]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))))",
          },
          {
            captures: {
              1: { name: "storage.modifier.ts" },
              2: { name: "keyword.operator.rest.ts" },
              3: { name: "variable.parameter.ts variable.language.this.ts" },
              4: { name: "variable.parameter.ts" },
              5: { name: "keyword.operator.optional.ts" },
            },
            match:
              "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$A-Za-z][_$0-9A-Za-z]*))\\s*(\\??)(?=:)",
          },
          { include: "#type-annotation" },
          { match: ",", name: "punctuation.separator.parameter.ts" },
          { include: "#type" },
        ],
      },
      "type-predicate-operator": {
        patterns: [
          {
            captures: {
              1: { name: "keyword.operator.type.asserts.ts" },
              2: { name: "variable.parameter.ts variable.language.this.ts" },
              3: { name: "variable.parameter.ts" },
              4: { name: "keyword.operator.expression.is.ts" },
            },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(asserts)\\s+)?(?!asserts)(?:(this)|([_$A-Za-z][_$0-9A-Za-z]*))\\s(is)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
          },
          {
            captures: {
              1: { name: "keyword.operator.type.asserts.ts" },
              2: { name: "variable.parameter.ts variable.language.this.ts" },
              3: { name: "variable.parameter.ts" },
            },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(asserts)\\s+(?!is)(?:(this)|([_$A-Za-z][_$0-9A-Za-z]*))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))asserts(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.operator.type.asserts.ts",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))is(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.operator.expression.is.ts",
          },
        ],
      },
      "type-primitive": {
        match:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(string|number|bigint|boolean|symbol|any|void|never|unknown)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
        name: "support.type.primitive.ts",
      },
      "type-string": {
        patterns: [
          { include: "#qstring-single" },
          { include: "#qstring-double" },
          { include: "#template-type" },
        ],
      },
      "type-tuple": {
        begin: "\\[",
        beginCaptures: { 0: { name: "meta.brace.square.ts" } },
        end: "\\]",
        endCaptures: { 0: { name: "meta.brace.square.ts" } },
        name: "meta.type.tuple.ts",
        patterns: [
          { match: "\\.\\.\\.", name: "keyword.operator.rest.ts" },
          {
            captures: {
              1: { name: "entity.name.label.ts" },
              2: { name: "keyword.operator.optional.ts" },
              3: { name: "punctuation.separator.label.ts" },
            },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))([_$A-Za-z][_$0-9A-Za-z]*)\\s*(\\?)?\\s*(:)",
          },
          { include: "#type" },
          { include: "#punctuation-comma" },
        ],
      },
      "typeof-operator": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))typeof(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
        beginCaptures: { 0: { name: "keyword.operator.expression.typeof.ts" } },
        end: "(?=[,);}\\]=>:&|{\\?]|(extends\\s+)|$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))",
        patterns: [{ include: "#type-arguments" }, { include: "#expression" }],
      },
      "undefined-literal": {
        match:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))undefined(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
        name: "constant.language.undefined.ts",
      },
      "var-expr": {
        patterns: [
          {
            begin:
              "(?=(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(var|let)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))",
            end: "(?!(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(var|let)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))((?=^|;|}|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))|((?<!^let|[^\\._$0-9A-Za-z]let|^var|[^\\._$0-9A-Za-z]var)(?=\\s*$)))",
            name: "meta.var.expr.ts",
            patterns: [
              {
                begin:
                  "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(var|let)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))\\s*",
                beginCaptures: {
                  1: { name: "keyword.control.export.ts" },
                  2: { name: "storage.modifier.ts" },
                  3: { name: "storage.type.ts" },
                },
                end: "(?=\\S)",
              },
              { include: "#destructuring-variable" },
              { include: "#var-single-variable" },
              { include: "#variable-initializer" },
              { include: "#comment" },
              {
                begin: "(,)\\s*(?=$|\\/\\/)",
                beginCaptures: {
                  1: { name: "punctuation.separator.comma.ts" },
                },
                end: "(?<!,)(((?==|;|}|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|^\\s*$))|((?<=\\S)(?=\\s*$)))",
                patterns: [
                  { include: "#single-line-comment-consuming-line-ending" },
                  { include: "#comment" },
                  { include: "#destructuring-variable" },
                  { include: "#var-single-variable" },
                  { include: "#punctuation-comma" },
                ],
              },
              { include: "#punctuation-comma" },
            ],
          },
          {
            begin:
              "(?=(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(const(?!\\s+enum\\b))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))",
            beginCaptures: {
              1: { name: "keyword.control.export.ts" },
              2: { name: "storage.modifier.ts" },
              3: { name: "storage.type.ts" },
            },
            end: "(?!(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(const(?!\\s+enum\\b))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))((?=^|;|}|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))|((?<!^const|[^\\._$0-9A-Za-z]const)(?=\\s*$)))",
            name: "meta.var.expr.ts",
            patterns: [
              {
                begin:
                  "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(const(?!\\s+enum\\b))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))\\s*",
                beginCaptures: {
                  1: { name: "keyword.control.export.ts" },
                  2: { name: "storage.modifier.ts" },
                  3: { name: "storage.type.ts" },
                },
                end: "(?=\\S)",
              },
              { include: "#destructuring-const" },
              { include: "#var-single-const" },
              { include: "#variable-initializer" },
              { include: "#comment" },
              {
                begin: "(,)\\s*(?=$|\\/\\/)",
                beginCaptures: {
                  1: { name: "punctuation.separator.comma.ts" },
                },
                end: "(?<!,)(((?==|;|}|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|^\\s*$))|((?<=\\S)(?=\\s*$)))",
                patterns: [
                  { include: "#single-line-comment-consuming-line-ending" },
                  { include: "#comment" },
                  { include: "#destructuring-const" },
                  { include: "#var-single-const" },
                  { include: "#punctuation-comma" },
                ],
              },
              { include: "#punctuation-comma" },
            ],
          },
          {
            begin:
              "(?=(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b((?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))",
            beginCaptures: {
              1: { name: "keyword.control.export.ts" },
              2: { name: "storage.modifier.ts" },
              3: { name: "storage.type.ts" },
            },
            end: "(?!(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b((?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))((?=;|}|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))|((?<!^using|[^\\._$0-9A-Za-z]using|^await\\s+using|[^\\._$0-9A-Za-z]await\\s+using)(?=\\s*$)))",
            name: "meta.var.expr.ts",
            patterns: [
              {
                begin:
                  "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b((?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))\\s*",
                beginCaptures: {
                  1: { name: "keyword.control.export.ts" },
                  2: { name: "storage.modifier.ts" },
                  3: { name: "storage.type.ts" },
                },
                end: "(?=\\S)",
              },
              { include: "#var-single-const" },
              { include: "#variable-initializer" },
              { include: "#comment" },
              {
                begin: "(,)\\s*((?!\\S)|(?=\\/\\/))",
                beginCaptures: {
                  1: { name: "punctuation.separator.comma.ts" },
                },
                end: "(?<!,)(((?==|;|}|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|^\\s*$))|((?<=\\S)(?=\\s*$)))",
                patterns: [
                  { include: "#single-line-comment-consuming-line-ending" },
                  { include: "#comment" },
                  { include: "#var-single-const" },
                  { include: "#punctuation-comma" },
                ],
              },
              { include: "#punctuation-comma" },
            ],
          },
        ],
      },
      "var-single-const": {
        patterns: [
          {
            begin:
              "([_$A-Za-z][_$0-9A-Za-z]*)(?=\\s*(=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))|(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$0-9A-Za-z]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))))|(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))",
            beginCaptures: {
              1: {
                name: "meta.definition.variable.ts variable.other.constant.ts entity.name.function.ts",
              },
            },
            end: "(?=$|^|[;,=}]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b)))",
            name: "meta.var-single-variable.expr.ts",
            patterns: [{ include: "#var-single-variable-type-annotation" }],
          },
          {
            begin: "([_$A-Za-z][_$0-9A-Za-z]*)",
            beginCaptures: {
              1: {
                name: "meta.definition.variable.ts variable.other.constant.ts",
              },
            },
            end: "(?=$|^|[;,=}]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b)))",
            name: "meta.var-single-variable.expr.ts",
            patterns: [{ include: "#var-single-variable-type-annotation" }],
          },
        ],
      },
      "var-single-variable": {
        patterns: [
          {
            begin:
              "([_$A-Za-z][_$0-9A-Za-z]*)(\\!)?(?=\\s*(=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))|(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$0-9A-Za-z]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))))|(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))",
            beginCaptures: {
              1: {
                name: "meta.definition.variable.ts entity.name.function.ts",
              },
              2: { name: "keyword.operator.definiteassignment.ts" },
            },
            end: "(?=$|^|[;,=}]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b)))",
            name: "meta.var-single-variable.expr.ts",
            patterns: [{ include: "#var-single-variable-type-annotation" }],
          },
          {
            begin: "([A-Z][_$\\dA-Z]*)(?![_$0-9A-Za-z])(\\!)?",
            beginCaptures: {
              1: {
                name: "meta.definition.variable.ts variable.other.constant.ts",
              },
              2: { name: "keyword.operator.definiteassignment.ts" },
            },
            end: "(?=$|^|[;,=}]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b)))",
            name: "meta.var-single-variable.expr.ts",
            patterns: [{ include: "#var-single-variable-type-annotation" }],
          },
          {
            begin: "([_$A-Za-z][_$0-9A-Za-z]*)(\\!)?",
            beginCaptures: {
              1: {
                name: "meta.definition.variable.ts variable.other.readwrite.ts",
              },
              2: { name: "keyword.operator.definiteassignment.ts" },
            },
            end: "(?=$|^|[;,=}]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b)))",
            name: "meta.var-single-variable.expr.ts",
            patterns: [{ include: "#var-single-variable-type-annotation" }],
          },
        ],
      },
      "var-single-variable-type-annotation": {
        patterns: [
          { include: "#type-annotation" },
          { include: "#string" },
          { include: "#comment" },
        ],
      },
      "variable-initializer": {
        patterns: [
          {
            begin: "(?<!=|!)(=)(?!=)(?=\\s*\\S)(?!\\s*.*=>\\s*$)",
            beginCaptures: { 1: { name: "keyword.operator.assignment.ts" } },
            end: "(?=$|^|[,);}\\]]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            patterns: [{ include: "#expression" }],
          },
          {
            begin: "(?<!=|!)(=)(?!=)",
            beginCaptures: { 1: { name: "keyword.operator.assignment.ts" } },
            end: "(?=[,);}\\]]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))|(?=^\\s*$)|(?<![\\|\\&\\+\\-\\*\\/])(?<=\\S)(?<!=)(?=\\s*$)",
            patterns: [{ include: "#expression" }],
          },
        ],
      },
    },
    scopeName: "source.ts",
    aliases: ["ts"],
  }),
];
export { e as default };
