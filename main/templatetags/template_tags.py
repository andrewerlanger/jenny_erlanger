from django import template

register = template.Library()


@register.filter
def preview(text):
    line_list = text.split("\n")[:2]
    line_list.append("...")
    return "\n".join(line_list)
